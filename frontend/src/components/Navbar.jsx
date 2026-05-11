import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (

    <nav
      className={`
        fixed w-full top-0 z-50
        backdrop-blur-lg
        border-b
        transition-all duration-300

        text-black dark:text-white
        border-gray-300 dark:border-gray-800

        ${scrolled
          ? "bg-white/90 dark:bg-black/90 py-3"
          : "bg-white/70 dark:bg-black/70 py-5"
        }
      `}
    >

      <div className="flex justify-between items-center px-8">

        <h1 className="text-2xl font-bold">
          Adoum Moussa Ramat
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <ul className="flex gap-8">

            <Link
              to="/"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              Accueil
            </Link>

            <Link
              to="/about"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              À propos
            </Link>

            <Link
              to="/projects"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              Projets
            </Link>

            <Link
              to="/skills"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              Compétences
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              Contact
            </Link>

          </ul>

          {/* Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:scale-110 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {
        menuOpen && (

          <div className="md:hidden flex flex-col gap-6 px-8 pb-6 pt-4 bg-white/95 dark:bg-black/95">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </Link>

            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projets
            </Link>

            <Link
              to="/skills"
              onClick={() => setMenuOpen(false)}
            >
              Compétences
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Theme Toggle */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-left text-xl"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

          </div>

        )
      }

    </nav>
  )
}

export default Navbar