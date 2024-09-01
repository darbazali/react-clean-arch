import React from "react";
import { useCreatePost } from "../hooks/useCreatePost";
import Button from "../../../components/common/Button";

const CreatePost: React.FC = (): JSX.Element => {
  const { createPost, loading, error } = useCreatePost();

  if (error) return <div>Error</div>;

  const newPost = {
    title: "title",
    body: "body",
    userId: 0,
    id: 0,
  };

  const handleCreatePost = () => {
    createPost(newPost);
  };

  return (
    <div>
      <Button loading={loading} onClick={handleCreatePost}>
        Add new post
      </Button>
    </div>
  );
};

export default CreatePost;
