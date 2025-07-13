import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import styles from "./login.module.css";

import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";

import { fetchPost } from "../utils/fetchUtils";

const Login = () => {
  const { token, setToken } = useAuth();
  const { inputs, handleChange } = useForm({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  if (token) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchPost("authors/login", {
      ...inputs,
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.message);
    } else {
      setToken(data.output.token);
      setError("");
    }
  };

  return (
    <div className={`container ${styles.loginContainer}`}>
      <h1 className="page-title">Login</h1>
      <div className={styles.loginFormContainer}>
        <form onSubmit={handleSubmit}>
          {error && <div className={styles.errorContainer}>{error}</div>}
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={inputs.username}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={inputs.password}
              required
            ></input>
          </div>
          <div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
          <p>
            Or <Link to="/signup">sign up</Link> for a new one
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
