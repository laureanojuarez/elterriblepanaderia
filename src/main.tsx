import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HomePage } from "../pages/Home/Home.tsx";
import { ProductsPage } from "../pages/Products/ProductsPage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {},
      {
        path: "productos",
        element: <ProductsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
