import './App.css';
import { useEffect, useState } from 'react';
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";

export default function AuthenticatedApp({ user, setUser }) {
    const history = useHistory()
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/posts")
        .then(res => res.json())
        .then(json => setPosts(json))
    }, []);

    const createPost = (formData) => {
        return fetch("/api/posts", {
            method: "POST",
            headers: {
                Accept: '*/*',
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
        .then(post => {
            setPosts(posts.concat(post))
        })
    }

    function handleLogoutClick() {
        fetch("/api/logout", {
            method: "DELETE",
            headers: {
                Accept: "*/*",
                "Content-type": "application/json"
            },
        }).then((r) => {
            if (r.ok) {
                setUser(null)
                history.push('/')
            }
        });
    }

    return (
        <div>
            <nav>
                <span>
                    <NavLink to="/explore">Explore</NavLink>
                    <NavLink to="/new-post">New Post</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </span>
                <span>
                Welcome, {user.username} <button onClick={handleLogoutClick}>Logout</button>
                </span>
            </nav>
            <Switch>
                <Route path="/explore">
                    <Posts posts={posts} />
                </Route>
                <Route path="/new-post">
                    <NewPost createPost={createPost} />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}