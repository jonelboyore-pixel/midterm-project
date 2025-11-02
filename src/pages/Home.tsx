import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="py-12 lg:py-20">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Adventure Seeker & Tech Enthusiast
          </motion.h1>
          
          <motion.p 
            className="text-lg text-slate-600 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm a passionate individual who thrives on adventure and competition. Whether I'm on the basketball court, diving into online gaming worlds, or exploring new destinations, I'm always seeking exciting experiences and pushing my boundaries.
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-600 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My love for challenges translates into creating dynamic web experiences that capture the same spirit of innovation and excitement.
          </motion.p>

          <motion.div 
            className="flex gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#about" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md shadow transition-colors">View About Me</a>
            <a href="#contact" className="inline-block border border-slate-200 dark:border-slate-700 px-5 py-2 rounded-md text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Let's Connect</a>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded">Basketball</span>
            <span className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded">Gaming</span>
            <span className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded">Travel</span>
            <span className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded">Web Development</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="order-first lg:order-last flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-indigo-600 dark:ring-indigo-400 transform transition-all duration-300 hover:scale-105">
            <img src="../Image/ProfileF.png" alt="Your profile picture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
