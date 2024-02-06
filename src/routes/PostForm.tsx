import "../styles/PostForm.css";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useContext } from "react";
import { supabase } from "../utils/supabase";
import { UserContext } from "../App";

interface postContentInterface {
  title: string;
  content: string;
  isPublished: boolean;
  user: string | undefined;
}

function PostForm() {
  const [postContent, setPostContent] = useState<
    postContentInterface | undefined
  >();

  const [userAccount] = useContext(UserContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPostContent((old) => {
      if (!old) {
        return {
          title: value,
          content: "",
          isPublished: false,
          user: userAccount.username,
        };
      }
      return { ...old, title: value };
    });
  }

  async function handleSubmit() {
    const { error } = await supabase.from("posts").insert(postContent);
    if (error) console.log(error);
  }

  return (
    <div className="editor-container">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => handleChange(e)}
      />
      <Editor
        apiKey={import.meta.env.VITE_TINY_KEY}
        onEditorChange={(newValue) =>
          setPostContent((prevPostContent) => {
            if (!prevPostContent) {
              return {
                title: "",
                content: newValue,
                isPublished: false,
                user: "",
              };
            }
            return { ...prevPostContent, content: newValue };
          })
        }
        value={postContent?.content}
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
        }}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}

export default PostForm;
