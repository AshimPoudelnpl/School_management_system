import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import BackToTopButton from '../shared/BackToTopButton'

const PublicLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default PublicLayout
