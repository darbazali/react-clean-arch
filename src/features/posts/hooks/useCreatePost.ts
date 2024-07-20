import { Post } from "../../../core/models/Post";
import postService from "../services/postService";
import useSWR from "swr";

interface Return {
  loading: boolean;
  error: boolean;
  createPost: (post: Post) => Promise<void>;
}

export const useCreatePost = (): Return => {
  const { error, mutate, isLoading } = useSWR({
    fallbackData: [],
  });

  const createPost = async (post: Post) => {
    await mutate(postService.createPost(post));
  };

  return { loading: isLoading, error, createPost };
};
