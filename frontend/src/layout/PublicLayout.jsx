import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default PublicLayout
