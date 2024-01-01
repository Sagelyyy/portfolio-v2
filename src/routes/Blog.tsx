import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { postInterface } from "../utils/interfaces";
import Post from "../components/Post";
import "../styles/Blog.css";
import { useParams } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState<postInterface[] | undefined>();
  // const [comments, setComments] = useState<commentInterface[] | undefined>();

  const { id } = useParams();

  useEffect(() => {
    // async function fetchComments() {
    //   const { data: commentData, error } = await supabase
    //     .from("comments")
    //     .select()
    //     .eq("post", id);
    //   if (error) console.log(error);
    //   setComments(commentData as commentInterface[]);
    // }

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
    // fetchComments();
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

  // const commentElems = comments?.map((comment) => (
  //   <Comments
  //     key={comment.id}
  //     created_at={comment.created_at}
  //     content={comment.content}
  //     username={comment.username}
  //     post={comment.post}
  //   />
  // ));

  return (
    <section className="blog-container">
      <div className="blog-items">{postElem && postElem}</div>
    </section>
  );
}

export default Blog;
