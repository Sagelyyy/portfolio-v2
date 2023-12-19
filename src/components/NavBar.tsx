import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "";
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");
      if (preferredTheme.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    } else {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
          className="nav-theme"
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "dark" ? "🌑" : "☀️"}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
