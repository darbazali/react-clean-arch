import React from "react";
import Post from "./Post";
import { useGetPost } from "../hooks/useGetPost";

const SinglePost: React.FC = () => {
  const { post, loading, error } = useGetPost();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Single Post</h1>
      <Post post={post} />
    </div>
  );
};

export default SinglePost;
