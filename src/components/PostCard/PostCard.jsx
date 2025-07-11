import styles from "./PostCard.module.css";

const PostCard = ({ header, children }) => {
  return (
    <div className={styles.postCardContainer}>
      <section className={styles.postCardHeader}>{header}</section>
      <article>{children}</article>
    </div>
  );
};

export default PostCard;
