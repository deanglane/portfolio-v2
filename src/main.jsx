import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages imports

import RootLayout from "./layouts/RootLayout.jsx";
import ErrorPage from "./error/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import Portfolio from "./routes/Portfolio.jsx";
import About from "./routes/About.jsx";
import Teckstack from "./routes/Techstack.jsx";
import Blog from "./routes/Blog.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "techstack", element: <Teckstack /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
