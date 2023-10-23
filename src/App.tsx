import React from "react";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import List from './routes/list'
import Write from './routes/write'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <p>main</p>
      </>
    ),
  },
  {
    path: "/list",
    element: <List />
  },
  {
    path: "/write",
    element: <Write />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
