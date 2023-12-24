import { commentInterface } from "../utils/interfaces";
import { DateTime } from "luxon";
import "../styles/Comments.css";

function Comments({ created_at, content, username }: commentInterface) {
  return (
    <div className="comment-wrapper">
      <h2 className="comment-user">{username}</h2>
      <p className="comment-content">{content}</p>
      <p className="comment-time">
        {DateTime.fromISO(created_at).toFormat("MM/dd/yyyy hh:mm a")}
      </p>
    </div>
  );
}

export default Comments;
