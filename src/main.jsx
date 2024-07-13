import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/root'
import "./index.css";
import Home from "./Routes/home";
import Articles from "./Routes/articles";
import About from "./Routes/about";
import Article from "./Routes/article";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/articles',
        element: <Articles />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/articles/:ArticleId', 
        element: <Article />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);