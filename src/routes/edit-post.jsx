import styles from "./edit-post.module.css";

const EditPost = () => {
  return (
    <div className={`container ${styles.editPostContainer}`}>
      <div>
        <h1 className="">Edit Your Post</h1>
        <hr />
      </div>

      <form action="" method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content"></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
