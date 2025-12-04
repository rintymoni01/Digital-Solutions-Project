import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from "./Pages/Blog/Blog";
import Servises from "./Pages/Servises/Servises";
import Project from "./Pages/Project/Project";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/servises", element: <Servises /> },
      { path: "/blog", element: <Blog /> },
      { path: "/project", element: <Project /> },
      { path: "/contact", element: <Contact /> },  // ✅ ঠিক এখানে add করতে হবে
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
