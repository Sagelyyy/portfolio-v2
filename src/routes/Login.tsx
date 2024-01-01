import { useState } from "react";
import { supabase } from "../utils/supabase";
import "../styles/Login.css";

function Login() {
  const [user, setUser] = useState({ email: "", password: "", phone: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword(user);
    if (error) console.log(error);
    console.log(data);
  }

  return (
    <div className="login-container">
      <h6>Login:</h6>
      <input
        onChange={(e) => handleChange(e)}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => handleChange(e)}
        name="password"
        type="password"
        placeholder="Password"
      />
      <button onClick={() => handleLogin()}>Submit</button>
    </div>
  );
}

export default Login;
