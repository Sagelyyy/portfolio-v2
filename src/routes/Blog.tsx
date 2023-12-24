import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { postInterface, commentInterface } from "../utils/interfaces";
import Post from "../components/Post";
import "../styles/Blog.css";
import { useParams } from "react-router-dom";
import BlogNav from "../components/BlogNav";
import Comments from "../components/Comments";

function Blog() {
  const [posts, setPosts] = useState<postInterface[] | undefined>();
  const [comments, setComments] = useState<commentInterface[] | undefined>();

  const { id } = useParams();

  useEffect(() => {
    async function fetchComments() {
      const { data: commentData, error } = await supabase
        .from("comments")
        .select()
        .eq("post", id);
      if (error) console.log(error);
      setComments(commentData as commentInterface[]);
    }

    async function fetchData() {
      if (id == "latest") {
        const { data: postData, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(1);
        if (error) {
          console.error(error);
          setPosts(undefined);
        } else {
          setPosts(postData as postInterface[]);
        }
      } else {
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
    }
    fetchData();
    fetchComments();
  }, [id]);

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

  const commentElems = comments?.map((comment) => (
    <Comments
      key={comment.id}
      created_at={comment.created_at}
      content={comment.content}
      username={comment.username}
      post={comment.post}
    />
  ));

  return (
    <section className="blog-container">
      <div className="blog-items">
        <BlogNav />
        {postElems && postElems}
        {comments?.length > 0 && (
          <div className="comments-container"> {commentElems}</div>
        )}
      </div>
    </section>
  );
}

export default Blog;
