import React from "react";
import { useCreatePost } from "../hooks/useCreatePost";

const CreatePost: React.FC = (): JSX.Element => {
  const { createPost, loading, error } = useCreatePost();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const newPost = {
    title: "title",
    body: "body",
    userId: 0,
    id: 0,
  };

  return (
    <div>
      <button onClick={() => createPost(newPost)}>Add new post</button>
    </div>
  );
};

export default CreatePost;
