import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "./context/PostsContext";
import "./App.css";

function PostDetalis() {
  const { id } = useParams();

  const posts = useContext(PostsContext);
  const post = posts.find((post) => post.id === Number(id));

    if (!post) {
    return (
        <div className="not-found">
        <div className="not-found-card">
            <h1>404</h1>
            <h2>Post Not Found</h2>
            <Link to="/posts">
            <button>Back to Posts</button>
            </Link>
        </div>
        </div>
    );
    }
  return (
    <div className="details-container">
      <div className="details-card">
        <h1>{post.title}</h1>
        <p className="description">{post.content}</p>
        <p className="author">
          <strong>Author:</strong> {post.author}
        </p>

        <p className="date">
          <strong>Date:</strong> {post.date}
        </p>

        <Link to="/posts">
          <button className="back-btn">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetalis;