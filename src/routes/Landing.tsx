import Card from "../components/Card";
import Hero from "../components/Hero";
import { projects } from "../data/projects";

function Landing() {
  const cardItems = projects.map((project, i) => {
    if (i < 3) {
      return i % 2 === 0 ? (
        <Card
          reversed={false}
          key={project.id}
          title={project.title}
          content={project.description}
          tags={project.tags}
          mobile={project.smallImg}
          preview={project.largeImg}
          largeAlt={project.largeAlt}
          smallAlt={project.smallAlt}
          live={project.live}
          github={project.repo}
        />
      ) : (
        <Card
          reversed={true}
          key={project.id}
          title={project.title}
          content={project.description}
          tags={project.tags}
          mobile={project.smallImg}
          preview={project.largeImg}
          largeAlt={project.largeAlt}
          smallAlt={project.smallAlt}
          live={project.live}
          github={project.repo}
        />
      );
    }
  });
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="project-container col">
        <h5 className="project-look">
          Featured Projects<span>.</span>
        </h5>
        {cardItems}
      </section>
    </>
  );
}

export default Landing;
