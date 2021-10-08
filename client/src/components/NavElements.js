import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding-right:0.5rem calc((100vw - 700px) / 2);
    z-index: 10;
    // border: solid;
    width: 100%;
`

export const NavLinks = styled(NavLink)`
    display: inline-flex;
    align-items: left;
    text-decoration: none;
    // padding: 0 1rem;
    padding-right: 10px;
    height: 100%
    cursor: pointer;
    font-size: 20px;
    &.active {
        color: #000;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`