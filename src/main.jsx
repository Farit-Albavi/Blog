import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PostContextProvider } from './context/PostContext'
import './index.css'
import Login from './routes/Login'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
      <RouterProvider router={router} />
    </PostContextProvider>
  </React.StrictMode>,
)
