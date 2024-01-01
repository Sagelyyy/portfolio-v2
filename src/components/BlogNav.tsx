import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Link } from "react-router-dom";
import dompurify from "dompurify";

interface titleInterface {
  title: string;
  id: number;
  content: string;
}

function BlogNav() {
  const [blogPosts, setBlogPosts] = useState<titleInterface[]>();

  useEffect(() => {
    async function queryBlogs() {
      const { data, error } = await supabase
        .from("posts")
        .select("title, id, content, created_at")
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error);
      }
      setBlogPosts(data as titleInterface[]);
    }
    queryBlogs();
  }, []);

  const blogLinks = blogPosts?.map((blog) => (
    <div className="blog-nav-link-wrapper" key={blog.id}>
      <Link className="blog-nav-link" to={`/blog/${blog.id}`}>
        {" "}
        {blog.title}
      </Link>
      <p
        className="blog-nav-summary"
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(
            blog.content.substring(0, blog.content.lastIndexOf(" ", 300))
          ),
        }}
      />
    </div>
  ));

  return <div className="blog-nav">{blogLinks}</div>;
}

export default BlogNav;
