import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Layout from "../components/Layout/Layout";
import AddNewBook from "../pages/AddNewBook/AddNewBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Not found!</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
