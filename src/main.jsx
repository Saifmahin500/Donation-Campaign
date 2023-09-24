import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Donate from './pages/Donate/Donate';
import Statistices from './pages/Statistices/Statistices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
      },
      {
        path : "/Donate",
        element : <Donate></Donate>,
      },
      {
        path : "/Statistics",
        element : <Statistices></Statistices>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
