import { NavLink } from "react-router-dom";
import { Nav, NavLinks, NavMenu } from './NavElements'

export default function Navbar({ user, handleLogoutClick }) {
    return (
        <Nav>
        <NavLinks calssname="logo-nav" to="/">
        🐾 Pet Social
        </NavLinks>
        <menubar>
          <NavLinks to="/explore">
            Explore
          </NavLinks>
          <NavLinks to="/profile">
            Profile
          </NavLinks>
          <NavLinks to="/new-post">
              New Post
          </NavLinks>
          Welcome, {user.username}
          <button onClick={() => handleLogoutClick()}>
              Logout
          </button>
        </menubar>
        </Nav>
    )
}