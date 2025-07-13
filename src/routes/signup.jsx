import { useState } from "react";
import { Navigate } from "react-router-dom";

import styles from "./signup.module.css";

import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import { fetchPost } from "../utils/fetchUtils";

const Signup = () => {
  const { token } = useAuth();
  const { inputs, handleChange } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  if (token) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchPost("authors/signup", {
      ...inputs,
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.message);
    } else {
      setError("");
    }
  };

  return (
    <div className={`container ${styles.signupContainer}`}>
      <h1 className="page-title">Create An Account</h1>
      <div className={styles.signupFormContainer}>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={inputs.email}
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
            <button type="submit" className={styles.signupButton}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
