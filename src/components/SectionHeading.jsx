import { motion } from 'framer-motion'

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
