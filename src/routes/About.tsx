import "../styles/About.css";

function About() {
  return (
    <section>
      <div className="about-me">
        <div>
          <p className="about-text">
            Hello, I'm Chris 👋, a passionate full-stack web developer based in
            the beautiful landscapes of New Hampshire. With a love for creating
            captivating digital experiences, I specialize in crafting dynamic
            and visually stunning websites.
          </p>
          <p className="about-text">
            Beyond coding, I immerse myself in the worlds of gaming 🕹️, capture
            moments through photography 📷, and seek adventure along hiking
            trails ⛰️.
          </p>
        </div>
        <img
          className="about-img"
          src="src/assets/images/chris.jpg"
          alt="The developer Chris Weiskopf smiling at the camera"
        />
      </div>
    </section>
  );
}

export default About;
