import React from 'react'
import LoginPage from './LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
        element:<LoginPage/>
        },
        {
            path: "/browse",
            element:<Browse/>
        }
])

  return (
      <div>
         <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body