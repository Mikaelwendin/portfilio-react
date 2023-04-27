import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { FrontPage } from './components/frontpage/FrontPage'
import { ContactPage } from './components/contactpage/ContactPage'
import { AboutPage } from './components/aboutpage/AboutPage'
import { ProjectsPage } from './components/projects/ProjectsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>,
  },
  {
    path: "/ContactPage",
    element: <ContactPage></ContactPage>,
  },
  {
    path: "/AboutPage",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/ProjectsPage",
    element: <ProjectsPage></ProjectsPage>,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
