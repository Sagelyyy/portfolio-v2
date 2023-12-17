import "./styles/App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { projects } from "./data/projects";
function App() {
  const cardItems = projects.map((project, i) =>
    i % 2 === 0 ? (
      <Card
        reversed={false}
        key={project.id}
        title={project.title}
        content={project.description}
        mobile={"https://dummyimage.com/500x300"}
        preview={"https://dummyimage.com/200x300"}
        live={project.live}
        github={project.repo}
      />
    ) : (
      <Card
        reversed={true}
        key={project.id}
        title={project.title}
        content={project.description}
        mobile={"https://dummyimage.com/500x300"}
        preview={"https://dummyimage.com/200x300"}
        live={project.live}
        github={project.repo}
      />
    )
  );

  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="project-container col">
        <h5 className="project-look">
          Projects<span>.</span>
        </h5>
        {cardItems}
      </section>
    </>
  );
}

export default App;
