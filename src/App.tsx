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
import { createContext, useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import { UserInterface, UserContextType } from "./utils/interfaces";

const initialUser: UserInterface = {
  email: undefined,
  username: undefined,
};

export const UserContext = createContext<UserContextType>([
  initialUser,
  () => {},
]);

function App() {
  const [user, setUser] = useState<UserInterface>(initialUser);

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const { data: data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser({
          email: data?.session?.user?.email,
          username: data?.session?.user?.email?.split("@")[0],
        });
      } catch (error) {
        console.error("Error fetching user session:", error);
      }
    };

    fetchUserSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, data) => {
      setUser({
        email: data?.user?.email,
        username: data?.user?.email?.split("@")[0],
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="app-wrapper">
      <UserContext.Provider value={[user, setUser]}>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
