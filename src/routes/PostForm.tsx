import "../styles/PostForm.css";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

interface postContentInterface {
  title: string;
  content: string;
  isPublished: boolean;
  user: string;
}

function PostForm() {
  const [postContent, setPostContent] = useState<
    postContentInterface | undefined
  >();

  useEffect(() => {
    console.log(postContent);
  }, [postContent]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPostContent((old) => {
      if (!old) {
        return {
          title: value,
          content: "",
          isPublished: false,
          user: "",
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
        apiKey="h5l5nfe2gpny11zndg9m5f6pyuhq8497lr85e3f36ox7c27t"
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
