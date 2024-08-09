import React from "react";
import { type Post } from "../../../core/models/Post";

interface Props {
  post: Post | undefined;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "1rem",
        marginBottom: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ marginTop: 0 }}>{post?.title}</h2>
      <p style={{ marginBottom: 0 }}>{post?.body}</p>
    </div>
  );
};

export default Post;
