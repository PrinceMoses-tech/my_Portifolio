import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14">
      <SectionHeading
        title="About Me"
        subtitle="I focus on building performant products with maintainable code and delightful user experience."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 md:grid-cols-[2fr_1fr] md:p-8"
      >
        <p className="leading-8 text-slate-600 dark:text-slate-300">
          I am a MERN Stack Developer who enjoys solving real business problems through modern web
          technologies. From API design and database modeling to responsive front-end interfaces, I
          build products end-to-end with a strong attention to quality, scalability, and clean UI.
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:-translate-y-0.5 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
