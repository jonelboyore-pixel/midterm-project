import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12 lg:py-20">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
        
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-white">
            I'm a passionate Computer Science student at Cavite State University, where I'm cultivating my skills in software development and exploring the vast world of technology. My academic journey has equipped me with a strong foundation in programming, algorithms, and problem-solving.
          </p>

          <p className="text-lg text-slate-700 dark:text-white">
            At CvSU, I've been exposed to various programming languages and technologies, allowing me to develop a versatile skill set. Beyond the classroom, I actively pursue personal projects that challenge me to apply theoretical knowledge to real-world solutions.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Academic Focus</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-white">
              <li>Computer Science Major at Cavite State University</li>
              <li>Specializing in Web Development and Software Engineering</li>
              <li>Strong foundation in Data Structures and Algorithms</li>
              <li>Experience with modern development tools and frameworks</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Beyond Academics</h3>
            <p className="text-lg text-slate-700 dark:text-white">
              When I'm not coding or studying, you can find me on the basketball court, immersed in online gaming, or exploring new places. I believe in maintaining a balance between academic excellence and personal interests, as this helps me approach problem-solving with a fresh perspective.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
