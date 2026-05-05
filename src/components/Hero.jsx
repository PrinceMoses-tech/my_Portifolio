import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'
import profileFallback from '../assets/profile-fallback.svg'
import useTypingEffect from '../hooks/useTypingEffect'

function Hero() {
  const typedRole = useTypingEffect('MERN Stack Developer')

  return (
    <section
      id="home"
      className="grid min-h-[80vh] scroll-mt-20 items-center gap-10 py-12 md:grid-cols-2 md:gap-6 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="order-2 text-center md:order-1 md:text-left"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-indigo-500">Hello, I am</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
          Moses
        </h1>
        <p className="mt-4 min-h-8 text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-2xl">
          {typedRole}
          <span className="ml-0.5 inline-block animate-pulse text-indigo-500">|</span>
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:mx-0 md:text-base">
          I build scalable full-stack applications with strong focus on clean architecture,
          smooth user experiences, and modern web best practices.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="order-1 flex justify-center md:order-2 md:justify-end"
      >
        <div className="group relative h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-1 shadow-[0_0_45px_rgba(99,102,241,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] md:h-80 md:w-80">
          <img
            src={profileImage}
            alt="Professional portrait of Moses"
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
            onError={(event) => {
              event.currentTarget.src = profileFallback
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
