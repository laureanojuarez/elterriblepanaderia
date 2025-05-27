import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ProductsPage } from "../pages/Products/ProductsPage.tsx";
import { HomePage } from "../pages/Home/Home.tsx";
import { ContactPage } from "../pages/Contact/ContactPage.tsx";

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
      {
        path: "contacto",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
