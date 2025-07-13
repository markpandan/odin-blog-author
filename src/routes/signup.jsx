import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div class={`container ${styles.signupContainer}`}>
      <h1 class="page-title">Create An Account</h1>
      <div class={styles.signupFormContainer}>
        <form action="/signup" method="post">
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required></input>
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
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
