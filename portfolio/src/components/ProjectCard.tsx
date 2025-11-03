import React from 'react'

type Props = {
  title: string
  description: string
  link?: string
  image?: string
}

export default function ProjectCard({ title, description, link, image }: Props) {
  return (
    <article className="group border dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {image && (
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white transform transition-transform group-hover:translate-x-1">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-white mb-3 transform transition-all duration-300 group-hover:text-slate-900 dark:group-hover:text-white">{description}</p>
        {link && (
          <a 
            href={link} 
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-white transition-all duration-300 group-hover:translate-x-1" 
            target="_blank" 
            rel="noreferrer"
          >
            View project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}
