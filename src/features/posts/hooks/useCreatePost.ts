import { useState } from "react";
import { Post } from "../../../core/models/Post";
import postService from "../services/postService";

export const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Post>();

  const createPost = async (post: Post) => {
    try {
      setLoading(true);
      const data = await postService.createPost(post);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, error, createPost, post: data };
};
