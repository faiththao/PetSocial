import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoginForm({ setUser }) {
    // const history = useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                res.json().then((user) => {
                    setUser(user)
                    // history.push('/explore')
                })
            } else {
                res.json().then(errors => {
                    console.error(errors)
                })
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
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