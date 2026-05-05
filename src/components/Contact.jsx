import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-14">
      <SectionHeading
        title="Contact"
        subtitle="Have an idea or project in mind? Let us build something impactful together."
      />

      <motion.form
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-3xl gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-indigo-500"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-indigo-500"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
          <textarea
            rows="6"
            placeholder="Tell me about your project..."
            className="resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-indigo-500"
          />
        </label>

        <button
          type="submit"
          className="justify-self-start rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-400"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  )
}

export default Contact
