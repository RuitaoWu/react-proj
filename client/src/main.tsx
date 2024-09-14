// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./ui/Layout"
import Product from './pages/Product.tsx';
import Category from './pages/Category.tsx';
import Cancel from './pages/Cancel.tsx';
import Cart from './pages/Cart.tsx';
import Favorite from './pages/Favorite.tsx';
import NotFound from './pages/NotFound.tsx';
import Orders from './pages/Orders.tsx';
import Profile from './pages/Profile.tsx';
import Success from './pages/Success.tsx';
const RouterLayout =()=>{
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children:[{
      path: "/",
      element: <App />,
    },{
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
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/orders",
      element: <Orders />,
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
     }
  ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
