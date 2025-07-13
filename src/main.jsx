import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import Home from "./routes/home.jsx";
import EditPost from "./routes/edit-post.jsx";
import Login from "./routes/login.jsx";
import Logout from "./routes/logout.jsx";
import Signup from "./routes/signup.jsx";
import Dashboard from "./routes/dashboard.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "authors/:authorName/posts/:postId",
        element: <EditPost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
