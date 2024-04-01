import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFound />
},
{
  path: '/destination',
  element: <Destination />
},
{
  path: '/crew',
  element: <Crew />
},
{
  path: '/technology',
  element: <Technology />
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
