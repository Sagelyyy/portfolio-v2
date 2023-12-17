import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
