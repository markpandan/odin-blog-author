import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav>
      <div className={`container ${styles.navbarContainer}`}>
        <div>
          <Link to={"/"} className={`${styles.navbarTitle}`}>
            <h1>
              The Blog Center{" "}
              <span className={styles.navbarMiniHeader}>| Authors</span>
            </h1>
          </Link>
        </div>
        <ul className={styles.navbarNav}>
          {Object.keys(user).length !== 0 ? (
            <>
              <Link to={"/dashboard"}>
                <li className={styles.navItem}>{user.username}</li>
              </Link>
              <Link to={"/logout"}>
                <li className={styles.navItem}>Logout</li>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <li className={styles.navItem}>Log In</li>
              </Link>
              <Link to={"/signup"}>
                <li className={styles.navItem}>Sign Up</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
