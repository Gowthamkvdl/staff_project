import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Ensure you import from 'react-router-dom'
import Layout from "./components/layout/Layout";
import Home from "./routes/home/Home";
import Fav from "./routes/fav/Fav";
import Profile from "./routes/profile/Profile";
import Login from "./routes/login/Login";
import NewPost from "./routes/newPost/NewPost";
import EditPost from "./routes/editPost/EditPost";
import { postsLoader } from "./lib/loader";
import Doubt from "./routes/doubt/Doubt";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: postsLoader,
        },
        {
          path: "/fav",
          element: <Fav />,
          loader: postsLoader,
        },
        {
          path: "/profile",
          element: <Profile />,
          loader: postsLoader,
        },
        {
          path: "/newPost",
          element: <NewPost />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/editPost/",
          element: <EditPost />,
        },
        {
          path: "/doubt",
          element: <Doubt />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
