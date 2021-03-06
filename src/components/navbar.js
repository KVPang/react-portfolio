import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <ul className="nav justify-content-center">
                {/* <li className="nav-item">
  <Link className="nav-link" to="/">Home</Link>
  </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
