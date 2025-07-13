import styles from "./dashboard.module.css";
import PostTab from "../components/PostTab";

const Dashboard = () => {
  return (
    <div className={`container ${styles.homeContainer}`}>
      <h1 className="page-title">Dashboard</h1>
      <div className={styles.statsContainer}>
        <div>
          <h1 className={styles.statsNumber}>32</h1>
          <p className={styles.statsDescription}>Total Posts</p>
        </div>
        <div>
          <h1 className={styles.statsNumber}>64,321</h1>
          <p className={styles.statsDescription}>Total Views</p>
        </div>
      </div>

      <div>
        <h2>Your Posts</h2>
        <hr />
      </div>
      <div className={styles.postTabList}>
        <PostTab>A Great Blog</PostTab>
        <PostTab>The Best Blog That You Will Ever Read</PostTab>
        <PostTab>Amazing Blog</PostTab>
        <PostTab>Do you know how to make a great blog?</PostTab>
      </div>

      {/* <div className={styles.postListContainer}>
        <PostCard header="Post Cart Title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          expedita modi minus dignissimos hic consectetur qui libero, esse
          impedit natus quos facere, nemo sequi perspiciatis in deleniti.
          Quibusdam, architecto repellat?
        </PostCard>
        <PostCard header="Post Cart Title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          expedita modi minus dignissimos hic consectetur qui libero, esse
          impedit natus quos facere, nemo sequi perspiciatis in deleniti.
          Quibusdam, architecto repellat?
        </PostCard>
        <PostCard header="Post Cart Title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          expedita modi minus dignissimos hic consectetur qui libero, esse
          impedit natus quos facere, nemo sequi perspiciatis in deleniti.
          Quibusdam, architecto repellat?
        </PostCard>
        <PostCard header="Post Cart Title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          expedita modi minus dignissimos hic consectetur qui libero, esse
          impedit natus quos facere, nemo sequi perspiciatis in deleniti.
          Quibusdam, architecto repellat?
        </PostCard>
      </div> */}
    </div>
  );
};

export default Dashboard;
