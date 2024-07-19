import { authorizedFetch } from "../../../app/fetchInstance";
import { Post } from "../../../core/models/Post";

export const postService = {
  getPosts: async (): Promise<Post[]> => {
    const response = await authorizedFetch(
      "https://jsonplaceholder.typicode.com/posts?limit=10",
    );
    const data = await response.json();
    return data;
  },

  getPost: async (id: number): Promise<Post> => {
    const response = await authorizedFetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const data = await response.json();
    return data;
  },

  createPost: async (post: Post): Promise<Post> => {
    const response = await authorizedFetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
    );
    const data = await response.json();
    return data;
  },
};
