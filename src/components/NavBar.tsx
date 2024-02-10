import { useContext, useEffect, useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

export function NavBar() {
  const [navDisplay, setNavDisplay] = useState(true);
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "";
  });

  const [user] = useContext(UserContext);

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
    const mediaQuery = window.matchMedia("(min-width: 40em)");

    setNavDisplay(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setNavDisplay(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
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
    if (window.innerWidth >= 40 * 16) {
      setNavDisplay(true);
    } else {
      setNavDisplay(!navDisplay);
    }
  }

  return (
    <>
      <span
        onClick={() => showNav()}
        className="material-symbols-outlined hamburger"
      >
        menu
      </span>

      <nav className="nav-container">
        {navDisplay && (
          <ul className="nav-links">
            <li className="nav-link">
              <Link onClick={() => showNav()} to="/">
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={() => showNav()} to={`/blogs`}>
                Blog
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={() => showNav()} to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={() => showNav()} to="/about">
                About
              </Link>
            </li>
            {user.email && (
              <li className="nav-link">
                <Link onClick={() => showNav()} to="/post">
                  New Post
                </Link>
              </li>
            )}

            <li
              className="nav-theme"
              onClick={() => {
                toggleTheme();
              }}
            >
              {theme === "dark" ? "☀️" : "🌑"}
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default NavBar;
