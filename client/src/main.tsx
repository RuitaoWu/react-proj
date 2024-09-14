import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  Outlet, createBrowserRouter,
} from "react-router-dom";
import Layout from "./ui/Layout"
const RouterLayout =()=>{
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
const router = createBrowserRouter([
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },


])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
