import React, { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { PostsContext } from "./context/PostsContext";
function PostList() {
    const posts = useContext(PostsContext);

  return (
    <>
      {posts.map((posts) => (
        <div className="posts-container" key={posts.id}>
          <div className="post-card">
            <h1>{posts.title}</h1>
            <h4>{posts.author}</h4>
            <p>{posts.description}</p>
            <p>{posts.date}</p>

            <Link to={`/posts/${posts.id}/`}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostList;