import { apiAgent } from "../../../adapters/apiAgent";
import { Post } from "../../../core/models/Post";

const postService = {
  /**
   * Fetches a list of the latest 10 posts
   */
  getPosts: async (): Promise<Array<Post>> => {
    const { data } = await apiAgent.get<Array<Post>>("/posts?limit=10");

    return data;
  },

  /**
   * Fetches a single post by its ID.
   *
   * @param id - The ID of the post to fetch.
   * @returns A Promise that resolves to the fetched Post object.
   */
  getPost: async (id: number): Promise<Post> => {
    const response: Promise<{ data: Post }> = apiAgent.get<
      unknown,
      { data: Post }
    >(`/posts/${id}`);

    return response.then((res) => res.data);
  },

  /**
   * Creates a new post.
   *
   * @param {Post} newPost - The post to be created.
   * @returns {Promise<Post>} A promise that resolves to the created post.
   */
  async createPost(newPost: Post): Promise<Post> {
    const response = await apiAgent.post<Post, { data: Post }>("/posts", {
      data: newPost,
    });

    return response.data;
  },
};

export default postService;
