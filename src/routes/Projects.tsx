import { projects } from "../data/projects";
import Tile from "../components/Tile";
function Projects() {
  // const projectElems = projects.map((project) => {
  //   return (
  //     <Tile
  //       key={project.id}
  //       title={project.title}
  //       img={project.largeImg}
  //       alt={project.largeAlt}
  //       github={project.repo}
  //       live={project.live}
  //     />
  //   );
  // });
  return (
    <section>
      <Tile
        key={1}
        title="Test Tile"
        img="https://placekitten.com/300/300"
        alt="placeholder"
        github="#"
        live="#"
      />
    </section>
  );
}

export default Projects;
