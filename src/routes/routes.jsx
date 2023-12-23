import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../Components/MainCalculator/MainCalculator";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/Auth/SignUp/SignUp";
import App from "../../App";
import Users from "../pages/Users/Users";
import UserDetails from "../Components/UserDetails/UserDetails";
import NotFound from "../Components/ErrorPage/NotFound";
import LogIn from "../pages/Auth/LogIn/LogIn";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        errorElement: <NotFound />,
      },
      {
        path: "/users/:userId",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        errorElement: <NotFound />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
