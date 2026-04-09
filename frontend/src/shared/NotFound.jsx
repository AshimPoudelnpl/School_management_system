import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 sm:px-6 lg:px-10">
      <section className="mx-auto flex max-w-3xl flex-col items-center justify-center border border-white/10 bg-white/5 px-8 py-20 text-center shadow-2xl shadow-black/20 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-color">
          404 Error
        </p>
        <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
        >
          Back to home
        </Link>
      </section>
    </div>
  )
}

export default NotFound
