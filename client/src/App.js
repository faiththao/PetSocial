// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
import NewPost from './pages/NewPost';
import Login from './pages/Login'
import Navbar from './components/Navbar';
import Posts from './pages/Posts'


function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
      fetch("/posts")
      .then(res => res.json())
      .then(json => setPosts(json))
  }, [])

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <Navbar user={user} setUser={setUser} />
    <main>
      <Switch>
        <Route path="/new-post">
          <NewPost user={user} />
        </Route>
        <Route path="/explore">
          <Posts posts={posts} />
        </Route>
      </Switch>
    </main>
    </>
  );
}

export default App;
