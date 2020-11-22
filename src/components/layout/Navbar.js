import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../img/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"> <img src={logo} alt="logo"/></Link>
            <ul className="navbar__list">
                <li className="navbar__list__item btn">About</li>
                <li className="navbar__list__item btn">Blogs</li>
                <li className="navbar__list__item btn">Contacts</li>
            </ul>
        </nav>
    )
}

export default Navbar
