import react from "react"
import { navbar } from "react-bootstrap"

const navbar = () => {
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

export default navbar