import { FiMoon, FiSun } from 'react-icons/fi'
import { navLinks } from '../data/portfolioData'

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-slate-900 transition-colors hover:text-indigo-500 dark:text-white dark:hover:text-indigo-400"
        >
          Moses.dev
        </a>

        <div className="flex items-center gap-3 md:gap-7">
          <ul className="hidden items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            aria-label="Toggle dark and light mode"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
