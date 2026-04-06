import React, { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import BackToTopButton from '../shared/BackToTopButton'
import usePageGsap from '../hooks/usePageGsap'

const PublicLayout = () => {
  const location = useLocation()
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname])

  usePageGsap(pageRef, location.pathname)

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div ref={pageRef}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default PublicLayout
