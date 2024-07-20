import { apiAgent } from "../../../adapters/apiAgent";
import { Post } from "../../../core/models/Post";

const postService = {
  getPosts: async (): Promise<Array<Post>> => {
    const { data } = await apiAgent.get<Array<Post>>("/posts?limit=10");

    return data;
  },

  getPost: async (id: number): Promise<Post> => {
    const response: Promise<{ data: Post }> = apiAgent.get<
      unknown,
      { data: Post }
    >(`/posts/${id}`);

    return response.then((res) => res.data);
  },

  createPost: async (newPost: Post) => {
    await apiAgent.post<Post, { data: Post }>("/posts", {
      data: newPost,
    });
  },

  deletePost: async (id: number) => {
    await apiAgent.delete(`/posts/${id}`);
  },
};

export default postService;
