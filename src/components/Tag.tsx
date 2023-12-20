import "../styles/Tag.css";
import { useEffect, useState } from "react";
import { tags } from "../data/tags";

type tagProps = { tagArr: string[] };

interface tagInterface {
  name: string;
  type: string;
  id: string;
}

function Tag({ tagArr }: tagProps) {
  const [tagItems, setTagItems] = useState<tagInterface[]>([]);

  useEffect(() => {
    const updatedTags = [];
    for (let i = 0; i < tagArr.length; i += 1) {
      for (let j = 0; j < tags.length; j += 1) {
        if (tagArr[i].toLowerCase() === tags[j].name.toLowerCase()) {
          updatedTags.push(tags[j]);
        }
      }
    }
    setTagItems(updatedTags);
  }, [tagArr]);

  function getTagClass(type: string) {
    switch (type) {
      case "language":
        return "language-tag";
      case "library/framework":
        return "library-framework-tag";
      case "database":
        return "database-tag";
      case "other":
        return "other-tag";
      case "design":
        return "design-tag";
      default:
        return "undefined-tag";
    }
  }

  const tagElems = tagItems.map((tag) => {
    const tagClass = getTagClass(tag.type);
    return (
      <div className={`tag ${tagClass}`} key={tag.id}>
        {tag.name}
      </div>
    );
  });

  return <>{tagElems}</>;
}

export default Tag;
