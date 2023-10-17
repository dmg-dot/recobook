import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import List from './routes/list'
import Write from './routes/write'

const router = createBrowserRouter([
  {
    path:"/",
    element:<></>,
    children:[
      {
        path:"",
        element:<List/>
      },
      {
        path:"write",
        element:<Write/>
      }
    ]
  }
])

function App() {


  return (
    <>
      
    </>
  )
}

export default App
