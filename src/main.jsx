import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
// import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login';
import Signin from './components/Signin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        elememt:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/signin",
        element:<Signin></Signin>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
