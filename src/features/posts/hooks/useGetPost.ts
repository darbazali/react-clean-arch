import { useEffect, useState } from "react";
import { Post } from "../../../core/models/Post";
import postService from "../services/postService";
import { useParams } from "react-router-dom";

export const useGetPost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Post>();

  const params = useParams();

  const id = Number(params.id);

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
