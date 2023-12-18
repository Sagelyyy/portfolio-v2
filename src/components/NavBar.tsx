import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  const [theme, setTheme] = useState<string>();
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = localStorage.getItem("theme");

  useEffect(() => {
    console.log("fire");
    if (currentTheme == "dark") {
      document.body.classList.toggle("dark");
      setTheme(currentTheme);
    } else if (currentTheme == "light") {
      document.body.classList.toggle("light");
      setTheme(currentTheme);
    }
  }, [currentTheme, theme]);

  function toggleTheme() {
    console.log("fired toggle");
    if (preferredTheme.matches) {
      document.body.classList.toggle("light");
      setTheme(document.body.classList.contains("light") ? "light" : "dark");
    } else {
      document.body.classList.toggle("dark-mode");
      setTheme(
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );
    }
    localStorage.setItem("theme", theme);
  }

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
        <li
          onClick={() => {
            toggleTheme();
          }}
        >
          Light / Dark
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
