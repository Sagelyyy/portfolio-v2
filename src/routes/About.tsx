import "../styles/About.css";

function About() {
  return (
    <section>
      <div className="about-me">
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum
          molestiae nobis placeat accusamus temporibus eius dolorum voluptatum
          eveniet ex tempora reiciendis sapiente voluptate suscipit nostrum in
          obcaecati natus at! Esse, mollitia dolorem ducimus quidem assumenda,
          ad aliquid quos nemo a unde neque libero inventore vitae facilis
          consequatur temporibus praesentium!
        </p>
        <img
          className="about-img"
          src="./assets/chris.jpg"
          alt="The developer Chris Weiskopf smiling at the camera"
        />
      </div>
    </section>
  );
}

export default About;
