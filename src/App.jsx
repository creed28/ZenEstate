import React from 'react'
import { createBrowserRouter,
  RouterProvider,
  Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'

const Layout = () => {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/property/:id",
        element: <PropertyDetails />
      }
    ]
  },
])


const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
     <RouterProvider router={router} />
    </div>
  )
}

export default App