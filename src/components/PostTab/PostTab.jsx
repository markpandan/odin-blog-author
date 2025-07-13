import { useState } from "react";
import styles from "./PostTab.module.css";
import { Link } from "react-router-dom";

const PostTab = ({ user, postId, children }) => {
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
        <Link to={`/authors/@${user}/posts/${postId}`}>Edit</Link>
      </div>
    </div>
  );
};

export default PostTab;
