import { useState } from "react"
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <container>
            <h1>Login or Sign Up</h1>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
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
                    <SignupForm onLogin={onLogin} />
                    <br />
                    <p>
                        Already have an account? &nbsp;
                        <button color="secondary" onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </p>
                </>
            )}
        </container>
    )
}
