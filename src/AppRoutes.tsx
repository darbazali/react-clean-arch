import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./features/posts/components/CreatePost";
import PostsList from "./features/posts/components/PostsList";
import SinglePost from "./features/posts/components/SinglePost";
import TodosList from "./features/todos/components/TodosList";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />

        <Route path="/todos" element={<TodosList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
