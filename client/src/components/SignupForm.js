import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignupForm({ signup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const history = useHistory()
    
    function handleSubmit(e) {
        e.preventDefault()
        signup({
            username,
            password,
            password_confirmation: passwordConfirmation,
        })
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
    }

    return (
        <form onSubmit={handleSubmit} classname="signup">
            <h2 htmlFor="username">Username</h2>
            <input
                type="text"
                id="username"
                // autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h2 htmlFor="password">Password</h2>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // autoComplete="current-password"
            />
            <h2 htmlFor="password">Confrim Password</h2>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                // autoComplete="current-password"
            />
            <button type="submit" >
                {/* {isLoading ? "Loading..." : "Sign Up"} */}
                Sign Up
            </button>
        </form>
    )
}