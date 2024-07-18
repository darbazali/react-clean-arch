import { useEffect, useState } from "react";
import { Post } from "../../../core/models/Post";
import { postService } from "../services/postService";

export const useGetPost = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Post>();

  useEffect(() => {
    (async () => {
      try {
        const data = await postService.getPost(id);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [id]);

  return { loading, error, post: data };
};
