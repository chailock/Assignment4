import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Add from "./Components/Add";
import AddMember from "./Components/AddMember";
import Edit from "./Components/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Add />,
  },
  {
    path: "/addmember",
    element: <AddMember />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
