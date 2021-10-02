import { Link } from "react-router-dom";

export default function Navbar() {
    function handleLogoutClick({ user, setUser }) {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return (
        <>
        Navbar
        <Link to="/">Pet Social</Link>
        <div>
            <button as={Link} to="/new">
                New Post
            </button>
            <button onClick={handleLogoutClick}>
                Logout
            </button>
        </div>
        </>
    )
}