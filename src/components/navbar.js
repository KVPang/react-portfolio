import React from "react";
// import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="container" >
    <ul className="nav justify-content-center">
  <li className="nav-item">
  {/* <Link to="/about" className="nav-link">About Me</Link> */}
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Resume</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact Me</a>
  </li>
</ul>
</div>
)
}

export default Navbar;