import React from "react";
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="container" >
    <ul className="nav justify-content-center">
  <li className="nav-item">
  <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About Me</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/projects">Projects</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
</ul>
</div>
)
}

export default Navbar;