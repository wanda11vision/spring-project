import React from 'react'
// import Nav from './components/Nav'
import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'     
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Services from './pages/Services'
import About from './pages/About'





function App() {
 let a= createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
   
    {
      path:'/about',
      element:<About/>
    },
    
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/projects',
      element:<Projects/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }

  ]
 )

  
  return (
    <div>
        <RouterProvider router={a}/>
    </div>
  )
}

export default App