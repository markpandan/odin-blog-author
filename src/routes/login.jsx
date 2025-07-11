import styles from "./login.module.css";

const Login = () => {
  return (
    <div class={`container ${styles.loginContainer}`}>
      <h1 class="page-title">Login</h1>
      <div class={styles.loginFormContainer}>
        <form action="/login" method="post">
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username"></input>
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"></input>
          </div>
          <div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
          <p>
            Or <a href="/signup">sign up</a> for a new one
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
