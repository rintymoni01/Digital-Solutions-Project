import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import './index.css'
import Contact from "./Pages/Contact/COntact";
import Blog from "./Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,  // default child route
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
