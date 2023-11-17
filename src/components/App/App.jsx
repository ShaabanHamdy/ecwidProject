import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import MasterLayout from '../masterLayout/MasterLayout'
import Home from '../Home/Home'
import Pricing from '../pricing/Pricing'
import Login from '../login/Login'


const App = () => {
 const router = createHashRouter([
  {path:"/" ,element: <MasterLayout/> ,
   errorElement:<h2>Page Not Found</h2> , children:[
  {index:true , element:<Home/>},
  {path:"pricing" , element:<Pricing/>},
  {path:"login" , element:<Login/>},
  ]}
 ])
 
 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App