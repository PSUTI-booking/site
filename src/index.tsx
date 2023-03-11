import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutComponent } from "./layout";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";

import "./index.css";
import FloorPage, { loader } from "./pages/FloorPage";
import UsersPage from "./pages/UsersPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutComponent>
        <App />
      </LayoutComponent>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "floor/:floorId",
    element: (
      <LayoutComponent>
        <FloorPage />
      </LayoutComponent>
    ),
    loader: loader,
  },
  {
    path: "cafedra/:cafedraId",
    element: (
      <LayoutComponent>
        <UsersPage />
      </LayoutComponent>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
