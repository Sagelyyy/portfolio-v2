import "../styles/Tile.css";

interface TileInterface {
  img: string;
  alt: string;
  github: string;
  live: string;
}

function Tile({ img, alt, github, live }: TileInterface) {
  return (
    <div className="tile">
      <div className="flip">
        <div className="front">
          <img alt={alt} src={img} />
        </div>
        <div className="back">
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
