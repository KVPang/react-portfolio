import react from "react"
import { Navbar } from "react-bootstrap"

const Navbar = () => {
    return ( 
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="#">About Me</a>
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
)
}

export default Navbar