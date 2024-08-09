import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "../features/posts/components/CreatePost";
import PostsList from "../features/posts/components/PostsList";
import SinglePost from "../features/posts/components/SinglePost";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
