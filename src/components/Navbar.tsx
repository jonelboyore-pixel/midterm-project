import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="backdrop-blur bg-white/70 dark:bg-slate-900/80 sticky top-0 z-30 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg text-slate-800 dark:text-white">JONEL BOYORE</a>
        <nav className="space-x-4 text-slate-700 dark:text-slate-300 hidden md:inline-flex items-center">
          <a href="#home" className="hover:text-slate-900 dark:hover:text-white">Home</a>
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <a href="#projects" className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded dark:text-white">Projects</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
