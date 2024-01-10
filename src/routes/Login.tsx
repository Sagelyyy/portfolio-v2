import { useState } from "react";
import { supabase } from "../utils/supabase";
import "../styles/Login.css";

type ToastType = {
  message?: string;
  err: boolean;
};

function Login() {
  const [user, setUser] = useState({ email: "", password: "", phone: "" });
  const [toast, setToast] = useState<ToastType>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword(user);

      if (error) {
        console.log(error);
        setToast({ message: error.message, err: true });
      } else {
        setUser({ email: "", password: "", phone: "" });
        console.log(data);
        setToast({ message: "Success ✅", err: false });
      }
    } catch (error) {
      console.error("Error during login:", error);
      setToast({ message: "Error during login", err: true });
    }
  }

  return (
    <>
      {toast && (
        <div className={`toast-container ${toast && toast.err ? "error" : ""}`}>
          {toast?.message}
        </div>
      )}
      <form onSubmit={(e) => handleLogin(e)} className="login-container">
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
