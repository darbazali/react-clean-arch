import CreatePost from "../features/posts/components/CreatePost";
import SinglePost from "../features/posts/components/SinglePost";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Clean Architecture with React</h1>
      <SinglePost />
      <CreatePost />
    </div>
  );
};

export default App;
