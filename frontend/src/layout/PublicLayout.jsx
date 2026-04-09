import React, { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import BackToTopButton from '../shared/BackToTopButton'

const PublicLayout = () => {
  const location = useLocation()

  useLayoutEffect(() => {
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
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default PublicLayout
