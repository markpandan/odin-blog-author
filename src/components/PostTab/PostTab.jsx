import { useState } from "react";
import styles from "./PostTab.module.css";
import { Link } from "react-router-dom";

const PostTab = ({ children }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className={styles.postTabContainer}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div>{children}</div>
      <div
        className={styles.buttonGroup}
        style={{ display: showButtons ? "block" : "none" }}
      >
        <Link to={"/authors/@mark/posts/123456"}>Edit</Link>
      </div>
    </div>
  );
};

export default PostTab;
