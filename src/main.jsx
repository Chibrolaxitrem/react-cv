import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import ErrorPage from './Error-page';
import Acceuil from './components/Acceuil';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Portfoliot from './components/Portfoliot';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/acceuil',
        element: <Acceuil />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/portfolio',
        element: <Portfoliot />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
