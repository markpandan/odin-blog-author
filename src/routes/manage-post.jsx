import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";
import { fetchGet, fetchPost, fetchPut } from "../utils/fetchUtils";
import styles from "./manage-post.module.css";

const ManagePost = () => {
  const { token } = useAuth();
  const { authorName, postId } = useParams();
  const { inputs, setInputs, handleChange } = useForm({
    title: "",
    content: "",
    is_published: false,
  });
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const routeURL = `authors/${authorName.slice(1)}/posts/${postId}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;

    if (postId == "new") {
      response = await fetchPost(routeURL, { ...inputs }, token);
    } else {
      response = await fetchPut(routeURL, { ...inputs }, token);
    }

    // const data = await response.json();
    if (!response.ok) {
      // setError(data.message);
    } else {
      navigate("/dashboard", { replace: true });
    }
  };

  useEffect(() => {
    if (postId !== "new") {
      const abortController = new AbortController();
      const fetchPost = async () => {
        try {
          const response = await fetchGet(
            routeURL,
            abortController.signal,
            token
          );

          const post = await response.json();
          setInputs({
            title: post.output.title,
            content: post.output.content,
            is_published: post.output.is_published,
          });
        } catch (error) {
          if (!error.name === "AbortError") {
            console.error(error.message);
          }
        }
      };
      fetchPost();

      return () => abortController.abort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`container ${styles.editPostContainer}`}>
      <div>
        <h1 className="">Edit Your Post</h1>
        <hr />
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={inputs.title}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            onChange={handleChange}
            value={inputs.content}
            required
          ></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <div>
            <input
              type="checkbox"
              name="is_published"
              id="is_published"
              onChange={handleChange}
              checked={inputs.is_published}
            />
            <label htmlFor="is_published">Publish</label>
          </div>

          <button type="submit">Save</button>
          <Link to={"/dashboard"}>
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ManagePost;
