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
      <div className="flip">
        <div className="front">
          <img id="tile-img" alt={alt} src={img} />
        </div>
        <div className="back">
          <h3>{title}</h3>
          <a target="_blank" href={github}>
            Github
          </a>
          <a target="_blank" href={live}>
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tile;
