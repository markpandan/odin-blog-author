import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to={"/login"}>
            <li className={styles.navItem}>Log In</li>
          </Link>
          <Link to={"/signup"}>
            <li className={styles.navItem}>Sign Up</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
