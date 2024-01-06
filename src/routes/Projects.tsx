import { projects } from "../data/projects";
import Tile from "../components/Tile";
function Projects() {
  const projectElems = projects.map((project) => {
    return (
      <Tile
        key={project.id}
        title={project.title}
        img={project.fullImg}
        alt={project.largeAlt}
        github={project.repo}
        live={project.live}
      />
    );
  });
  return <section className="tile-container">{projectElems}</section>;
}

export default Projects;
