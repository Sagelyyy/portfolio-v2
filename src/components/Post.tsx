import { postInterface } from "../utils/interfaces";
import { DateTime } from "luxon";
import "../styles/Post.css";

function Post({ id, title, content, user, created_at }: postInterface) {
  const formattedDate =
    DateTime.fromISO(created_at).toFormat("MM/dd/yyyy hh:mm a");

  return (
    <div className="post-container" key={id}>
      <h3 className="post-title">{title}</h3>
      <p className="post-footer">
        Published by <span className="post-user">{user}</span> at{" "}
        {formattedDate}
      </p>
      <p className="post-content">{content}</p>
    </div>
  );
}

export default Post;
