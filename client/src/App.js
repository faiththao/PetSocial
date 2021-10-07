// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';


function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  

  useEffect(() => {
    fetch("/api/me", {
      credentials: 'include'
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user)
          setAuthChecked(true)})
      } else {
        setAuthChecked(true)
      }
    });
  }, []);


  if (!authChecked) return <Login onLogin={setUser} />;

  return (
    <>
    <Router>
      {user ? (
        <AuthenticatedApp
          setUser={setUser}
          user={user}
        />
      ) : (
        <UnauthenticatedApp
          setUser={setUser}
        />
      )}
    </Router>
    </>
  );
}

export default App;
