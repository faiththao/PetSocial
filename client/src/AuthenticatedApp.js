import './App.css';
import { useEffect, useState } from 'react';
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";
import Navbar from './components/Navbar';

export default function AuthenticatedApp({ user, setUser }) {
    const history = useHistory()
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

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

    function updateLikes(id) {

        fetch("/api/posts", {
            method: "PATCH",
            headers: {
                Accept: '*/*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
        .then(res => console.log(res))
        // .then(data => setPosts(data.likes))
    }

    // function handleDelete() {
    //     fetch("/api/posts/:id", {
    //         method: "DELETE",
    //     })
    // .then(res => res.json())
    // .then(id => console.log(id))}

    

    useEffect(() => {
        fetch("/api/comments")
            .then(res => res.json())
            .then(data => setComments(data))
    })



    const createComment = (formData) => {
        return fetch("/api/comments", {
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
        .then(comment => {
            setComments(comments.concat(comment))
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
                // history.push('/')
            }
        });
    }


    return (
        <div>
            <nav>
                <Navbar 
                user={user}
                handleLogoutClick={handleLogoutClick} />
            </nav>
            <Switch>
                <Route path="/explore">
                    <Posts 
                    posts={posts} 
                    updateLikes={updateLikes}
                    // handleDelete={handleDelete}
                    comments={comments}
                    createComment={createComment}
                    />
                </Route>
                <Route path="/new-post">
                    <NewPost createPost={createPost} />
                </Route>
                <Route path="/profile">
                    <Profile user={user} posts={posts}/>
                </Route>
            </Switch>
        </div>
    )
}