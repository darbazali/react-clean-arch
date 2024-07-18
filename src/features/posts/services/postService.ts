import { Post } from "../../../core/models/Post";

export const postService = {
  getPosts: async (): Promise<Post[]> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?limit=10",
    );
    const data = await response.json();
    return data;
  },
};
