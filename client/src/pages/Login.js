import { useState } from "react"
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    const signup = (formData) => {
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
            },
            body: JSON.stringify(formData),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                        .then((user) => {
                            setUser(user)
                        })
                } else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                }
            )
    }

    return (
        <div>
            <h1>🕸Login or Sign Up🕸</h1>
            {showLogin ? (
                <>
                    <LoginForm signup={signup} setUser={setUser} />
                    <br />
                    <p>
                        Don't have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </p>
                </>
            ) : (
                <>
                    <SignupForm setUser={setUser} />
                    <br />
                    <p>
                        Already have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </>
            )}
            <br />
            <h3 classname="login-page"> Happy Halloween 👻 </h3>
            <img src="https://www.multivu.com/players/English/8946051-petsmart-halloween-costume-collection/image/PetsinCostumes_1630521797367-HR.jpg" alt="spooky pets" />
        </div>
    )
}
