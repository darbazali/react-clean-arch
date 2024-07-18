import { useGetPosts } from "../hooks/useGetPosts";

const PostsList: React.FC = (): JSX.Element => {
  const { posts, loading, error } = useGetPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
