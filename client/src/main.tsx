import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./ui/Layout.tsx";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Product from "./pages/Product.tsx";
import Category from "./pages/Category.tsx";
import Profile from "./pages/Profile.tsx";
import Cart from "./pages/Cart.tsx";
import Favourite from "./pages/Favourite.tsx";
import Order from "./pages/Order.tsx";
import Success from "./pages/Success.tsx";
import Cancel from "./pages/Cancel.tsx";
import NotFound from "./pages/NotFound.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
