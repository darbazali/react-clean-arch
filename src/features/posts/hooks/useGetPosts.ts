import postService from "../services/postService";
import useSWR from "swr";

export const useGetPosts = () => {
  const { data, isLoading, error } = useSWR("/posts", postService.getPosts);

  return { loading: isLoading, error, posts: data?.slice(0, 10) };
};
