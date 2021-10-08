import { Link } from "react-router-dom";
import { Nav, NavLinks, NavMenu } from './NavElements'

export default function Navbar({ handleLogoutClick }) {
    return (
        <Nav>
        <Link to="/">Pet Social</Link>
        <NavMenu>
          <NavLinks to="/explore">
            Explore
          </NavLinks>
          <NavLinks to="/profile">
            Profile
          </NavLinks>
          <NavLinks to="/new-post">
              New Post
          </NavLinks>
          <button onClick={handleLogoutClick}>
              Logout
          </button>
        </NavMenu>
        </Nav>
    )
}