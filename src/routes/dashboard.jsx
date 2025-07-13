import styles from "./dashboard.module.css";
import PostTab from "../components/PostTab";

import useAuth from "../hooks/useAuth";
import useGetData from "../hooks/useGetData";
import { Link, Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, token } = useAuth();
  const posts = useGetData(`authors/@${user.username}/posts`, token);

  if (Object.keys(user).length == 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`container ${styles.homeContainer}`}>
      <h1 className="page-title">Dashboard</h1>
      <div className={styles.statsContainer}>
        <div>
          <h1 className={styles.statsNumber}>N/A</h1>
          <p className={styles.statsDescription}>Total Posts</p>
        </div>
        <div>
          <h1 className={styles.statsNumber}>N/A</h1>
          <p className={styles.statsDescription}>Total Views</p>
        </div>
      </div>

      <div>
        <div className={styles.postTabHeader}>
          <h2>Your Posts</h2>
          <Link to={`/authors/@${user.username}/posts/new`}>
            <button>+ Create New</button>
          </Link>
        </div>

        <hr />
      </div>
      <div className={styles.postTabList}>
        {posts.map((post, index) => (
          <PostTab key={index} user={user.username} postId={post.id}>
            {post.title}
          </PostTab>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
