import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Statistic from './components/Statistic/Statistic.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
