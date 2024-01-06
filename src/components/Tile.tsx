import "../styles/Tile.css";

interface TileInterface {
  title: string;
  img: string;
  alt: string;
  github: string;
  live: string;
}

function Tile({ title, img, alt, github, live }: TileInterface) {
  return (
    <div className="tile">
      <img src={img} alt={alt} id="tile-img" />
      <div className="tile-overlay"></div>
      <div className="tile-info-container">
        <h3 className="tile-title">{title}</h3>
        <a href={github} target="_blank">
          Github
        </a>
        <a href={live} target="_blank">
          Live Preview
        </a>
      </div>
    </div>
  );
}

export default Tile;
