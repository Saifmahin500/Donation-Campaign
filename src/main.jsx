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
import CardDetails from './Componenets/CardDetails/CardDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
      },
      {
        path : "/Donate",
        element : <Donate></Donate>,
        loader : () => fetch('../data.json')
      },
      {
        path : "/Statistics",
        element : <Statistices></Statistices>,
        loader : () => fetch('../data.json')
        
      },
      {
        path : "/card/:id",
        element : <CardDetails></CardDetails>,
        loader : () => fetch('../data.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
