import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Link } from "react-router-dom";

interface titleInterface {
  title: string;
  id: number;
}

function BlogNav() {
  const [blogPosts, setBlogPosts] = useState<titleInterface[]>();

  useEffect(() => {
    async function queryBlogs() {
      const { data, error } = await supabase.from("posts").select("title, id");
      if (error) {
        console.log(error);
      }
      setBlogPosts(data as titleInterface[]);
    }
    queryBlogs();
  }, []);

  const blogLinks = blogPosts?.map((blog) => (
    <Link className="blog-nav-link" key={blog.id} to={`/blog/${blog.id}`}>
      {" "}
      {blog.title}
    </Link>
  ));

  return (
    <div className="blog-nav">
      <h3 className="blog-nav-title">Blog Posts:</h3>
      {blogLinks}
    </div>
  );
}

export default BlogNav;
