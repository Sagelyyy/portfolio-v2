import { postInterface } from "../utils/interfaces";
import { DateTime } from "luxon";
import "../styles/Post.css";

function Post({
  id,
  title,
  content,
  user,
  isPublished,
  created_at,
}: postInterface) {
  return (
    <div className="post-container" key={id}>
      <h3 className="post-title">{title}</h3>
      <p className="post-content">{content}</p>
      <p className="post-user">
        Published by <span>{user}</span> at{" "}
        {DateTime.fromISO(created_at).toFormat("MM/dd/yyyy hh:mm a")}
      </p>
    </div>
  );
}

export default Post;
