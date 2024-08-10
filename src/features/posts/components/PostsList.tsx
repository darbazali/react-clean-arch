import { useGetPosts } from "../hooks/useGetPosts";
import Post from "./Post";

const PostsList: React.FC = (): JSX.Element => {
  const { posts = [], loading, error } = useGetPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
