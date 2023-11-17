import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'


const MasterLayout = () => {
  return (
    
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MasterLayout