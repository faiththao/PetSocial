import { Redirect, Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Login from "./pages/Login";

export default function UnauthenticatedApp({ setUser }) {
    return (
        <Switch>
            <Route exact path="/">
                <Login setUser={setUser} />
            </Route>
            <Route exact path="/signup">
                <SignupForm setUser={setUser} />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}