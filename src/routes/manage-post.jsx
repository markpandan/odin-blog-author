import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
  });
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const routeURL = `authors/${authorName.slice(1)}/posts/${postId}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    if (postId == "new") {
      response = await fetchPost(
        routeURL,
        { ...inputs, is_published: true },
        token
      );
    } else {
      response = await fetchPut(
        routeURL,
        { ...inputs, is_published: true },
        token
      );
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
          setInputs({ title: post.output.title, content: post.output.content });
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
          <button type="submit">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ManagePost;
