import { useState } from "react";
import { Post } from "../../../core/models/Post";
import postService from "../services/postService";

interface Return {
  loading: boolean;
  error: boolean;
  createPost: (post: Post) => Promise<void>;
}

export const useCreatePost = (): Return => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const createPost = async (post: Post) => {
    try {
      setLoading(true);
      await postService.createPost(post);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, error, createPost };
};
