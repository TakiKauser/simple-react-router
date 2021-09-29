import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "teal"
    };
    return (
        <nav className="navbar">
            <NavLink
                activeStyle={activeStyle}
                to="/home"
            >Home</NavLink>
            <NavLink
                activeStyle={activeStyle}
                to="/friends"
            >Friends</NavLink>
            <NavLink
                activeStyle={activeStyle}
                to="/about"
            >About</NavLink>
            <NavLink
                activeStyle={activeStyle}
                to="/about/culture"
            >Culture</NavLink>
        </nav>
    );
};

export default Header;