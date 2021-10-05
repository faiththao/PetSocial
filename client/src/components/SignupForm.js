import { useState } from "react";

export default function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    const user = {
        username,
        password,
        password_confirmation: passwordConfirmation,
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
            },
            body: JSON.stringify({user}),
        })
        .then((res) => {
            if (res.ok) {
              res.json()
              .then((user) => onLogin(user));
            }
        });
    }
    

    return (
        <form onClick={handleSubmit}>
            <h2 htmlFor="username">Username</h2>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h2 htmlFor="password">Password</h2>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />
            <h2 htmlFor="password">Confrim Password</h2>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
            />
            <button type="submit">
                {/* {isLoading ? "Loading..." : "Sign Up"} */}
                Sign Up
            </button>
        </form>
    )
}