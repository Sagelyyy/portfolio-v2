import { postInterface } from "../utils/interfaces";
import { DateTime } from "luxon";
import dompurify from "dompurify";
import "../styles/Post.css";
// import { useContext } from "react";
// import { UserContext } from "../App";

function Post({ id, title, content, user, created_at }: postInterface) {
  // const [userAccount, setUserAccount] = useContext(UserContext);
  // TODO: Setup the ability to edit posts

  const formattedDate =
    DateTime.fromISO(created_at).toFormat("MM/dd/yyyy hh:mm a");

  return (
    <div className="post-container" key={id}>
      <h3 className="post-title">{title}</h3>
      <p className="post-footer">
        Published by <span className="post-user">{user}</span> at{" "}
        {formattedDate}
      </p>
      <p
        className="post-content"
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(content, { FORCE_BODY: true }),
        }}
      />
    </div>
  );
}

export default Post;
