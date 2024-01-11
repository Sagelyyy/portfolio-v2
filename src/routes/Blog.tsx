import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { postInterface } from "../utils/interfaces";
import Post from "../components/Post";
import "../styles/Blog.css";
import { useParams } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState<postInterface[] | undefined>();

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data: postData, error } = await supabase
        .from("posts")
        .select()
        .eq("id", id);
      if (error) {
        console.error(error);
        setPosts(undefined);
      } else {
        setPosts(postData as postInterface[]);
      }
    }
    fetchData();
  }, [id]);

  const postElem = posts?.map((post) => (
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

  return (
    <section className="blog-container">
      <div className="blog-items">{postElem && postElem}</div>
    </section>
  );
}

export default Blog;
