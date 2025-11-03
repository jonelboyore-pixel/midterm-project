import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="backdrop-blur bg-white/70 dark:bg-slate-900/80 sticky top-0 z-30 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-slate-800 dark:text-white">JONEL BOYORE</Link>
        <nav className="space-x-4 text-slate-700 dark:text-slate-300 hidden md:inline-flex items-center">
          <Link to="/" className="hover:text-slate-900 dark:hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-slate-900 dark:hover:text-white">About</Link>
          <Link to="/projects" className="hover:text-slate-900 dark:hover:text-white">Projects</Link>
          <Link to="/contact" className="hover:text-slate-900 dark:hover:text-white">Contact</Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <Link to="/projects" className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded dark:text-white">Projects</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
