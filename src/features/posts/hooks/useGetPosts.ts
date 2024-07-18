import { useEffect, useState } from "react";
import { postService } from "../services/postService";
import { Post } from "../../../core/models/Post";

export const useGetPosts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await postService.getPosts();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, posts: data.slice(0, 10) };
};
