import { useState } from "react";

export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:4002/login", {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((user) => onLogin(user));
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
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />  
            <button variant="fill" color="primary" type="submit" >
                {isLoading ? "Loading..." : "Login"}
            </button>
        </form>
    )
}