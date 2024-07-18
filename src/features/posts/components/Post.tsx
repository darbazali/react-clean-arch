import React from "react";
import { type Post } from "../../../core/models/Post";

interface Props {
  post: Post | undefined;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default Post;
