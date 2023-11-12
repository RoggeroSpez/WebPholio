import React from "react";
import {NavLink} from "react-router-dom";
import "./navBar.css";


const NavBar = () => (
    <nav className="navbar">
        <NavLink to="/"  className={({ isActive}) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to="/Education" className={({ isActive}) => (isActive ? "active" : undefined)}>Education</NavLink>
        <NavLink to="/Projects" className={({ isActive}) => (isActive ? "active" : undefined)}>Projects</NavLink>
        <NavLink to="/Work" className={({ isActive}) => (isActive ? "active" : undefined)}>Work</NavLink>
        <NavLink to="/Refrences" className={({ isActive}) => (isActive ? "active" : undefined)}>Refrences</NavLink>
    </nav>
)
export default NavBar;