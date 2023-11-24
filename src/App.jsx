import React from 'react'
import 
  { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } 
from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import TopAgents from './pages/TopAgents'
import { Layout } from './layouts/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route element={<Layout />}>
          <Route path="/about" element={<About />}/>
          <Route path="/properties" element={<Properties />}/>
          <Route path="/property/:id" element={<PropertyDetails />}/>
          <Route path="/top-agents" element={<TopAgents />}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App