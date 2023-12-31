import "./styles/App.css";

import NavBar from "./components/NavBar";
import Landing from "./routes/Landing";
import About from "./routes/About";
import { Routes, Route } from "react-router-dom";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import Footer from "./components/Footer";
import BlogNav from "./routes/BlogNav";
import Blog from "./routes/Blog";
import PostForm from "./routes/PostForm";
import Login from "./routes/Login";
function App() {
  return (
    <div className="app-wrapper">
      <section className="navigation">
        <NavBar />
      </section>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<BlogNav />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/post" element={<PostForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
