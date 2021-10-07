import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
    // function handleLogoutClick() {
    //     fetch("/logout", { 
    //       method: "DELETE",
    //       headers: {
    //         Accept: "*/*",
    //         "Content-type": "application/json"
    //       }, 
    //     }).then((r) => {
    //       if (r.ok) {
    //         setUser(null);
    //       }
    //     });
    //   }
    return (
        <>
        <Link to="/">Pet Social</Link>
        <div>
          <button as={Link} to="/explore">
            Explore
          </button>
          <button as={Link} to="/profile">
            Profile
          </button>
          <button as={Link} to="/new-post">
              New Post
          </button>
          <button onClick={handleLogoutClick}>
              Logout
          </button>
        </div>
        </>
    )
}