import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-white">
        © {new Date().getFullYear()} My Portfolio. Built with React + Vite.
      </div>
    </footer>
  )
}
