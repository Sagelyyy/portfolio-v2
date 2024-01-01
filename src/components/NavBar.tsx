import { useEffect, useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  const [navDisplay, setNavDisplay] = useState(true);
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
    const handleResize = () => {
      if (window.innerWidth >= 40 * 16) {
        setNavDisplay(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  function showNav() {
    setNavDisplay(!navDisplay);
  }

  return (
    <>
      <span onClick={showNav} className="material-symbols-outlined hamburger">
        menu
      </span>

      <nav className="nav-container">
        {navDisplay && (
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to={`/blogs`}>Blog</Link>
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
        )}
      </nav>
    </>
  );
}

export default NavBar;
