import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { postInterface, commentInterface } from "../utils/interfaces";
import Post from "../components/Post";
import "../styles/Blog.css";

function Blog() {
  const [posts, setPosts] = useState<postInterface[] | undefined>();
  const [comments, setComments] = useState<commentInterface[] | undefined>();

  useEffect(() => {
    async function fetchData() {
      const { data: postData, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error(error);
        setPosts(undefined);
      } else {
        setPosts(postData as postInterface[]);
      }
    }

    fetchData();
  }, []);

  const postElems = posts?.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
      user={post.user}
      isPublished={post.isPublished}
      created_at={post.created_at}
    />
  ));

  return <section className="blog-container">{postElems && postElems}</section>;
}

export default Blog;
