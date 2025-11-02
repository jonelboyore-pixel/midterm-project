import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="py-12 lg:py-20">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <motion.h2 
        className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProjectCard 
          title="Clock Apps" 
          description="An interactive clock application showcasing time management and digital clock features." 
          link="https://jonelboyore.github.io/clock-apps/" 
          image="/src/Image/project2.png" 
        />
        <ProjectCard 
          title="Laro Pick" 
          description="A game selection application that helps users discover and choose games to play." 
          link="https://jonelboyore.github.io/Laro-pick/" 
          image="/src/Image/project1.png" 
        />
      </motion.div>
      </div>
    </section>
  )
}
