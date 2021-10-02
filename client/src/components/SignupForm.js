import { useState } from "react";

export default function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                // Accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
        .then((r) => r.json())
        .then(onLogin)
            // setIsLoading(false);
            // if (r.ok) {
            //     r.json().then((user) => onLogin(user));
            // } else {
            //     r.json().then((err) => setErrors(err.errors));
            // }

    }
    

    return (
        <form>
            <h2>Username</h2>
            <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h2>Password</h2>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />
            <h2>Confrim Password</h2>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
            />
            <button type="submit" onClick={handleSubmit}>
                {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <h3>
                {errors.map((err) => (
                    <h3 key={err}>{err}</h3>
                ))}
            </h3>
        </form>
    )
}