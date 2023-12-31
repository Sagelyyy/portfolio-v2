import { useEffect, useRef, useState } from "react";
import "../styles/Card.css";
import Tag from "./Tag";

interface CardInterface {
  title: string;
  content: string;
  mobile: string;
  preview: string;
  reversed: boolean;
  github: string;
  live: string;
  tags: string[];
}

function Card({
  title,
  content,
  mobile,
  preview,
  reversed,
  github,
  live,
  tags,
}: CardInterface) {
  type RefType = HTMLDivElement | null;

  const [inter, setInter] = useState(false);
  const ref = useRef<RefType>(null);

  useEffect(() => {
    if (window.screen.width > 320) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInter(entry.isIntersecting);
        },
        { rootMargin: "-25px" }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    } else {
      const observer = new IntersectionObserver(([entry]) => {
        setInter(entry.isIntersecting);
      });
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  });

  useEffect(() => {
    if (ref.current) {
      if (inter) {
        ref.current.classList.add("slide-in");
      } else if (!inter) {
        ref.current.classList.remove("slide-in");
      }
    }
  }, [inter]);

  return (
    <div ref={ref} className={reversed ? "card row-reverse" : "card"}>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="card-tags">
          <Tag tagArr={tags} />
        </div>
        <div className="links">
          <a href={github} target="_blank">
            Github Repo
          </a>
          <a href={live} target="_blank">
            Live Preview
          </a>
        </div>
      </div>
      <div className={reversed ? "card-images row-reverse" : "card-images"}>
        <img src={preview} alt="preview of Test Card" />
        <img src={mobile} alt="preview of mobile card" />
      </div>{" "}
    </div>
  );
}

export default Card;
