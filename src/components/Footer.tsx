import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="footer-container">
      <ul>
        <li>
          <a href="https://github.com/Sagelyyy" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chriscancode/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:chris@chriscancode.io">Contact Me</a>
        </li>
        <li>© {year} Christian Weiskopf</li>
      </ul>
    </section>
  );
}

export default Footer;
