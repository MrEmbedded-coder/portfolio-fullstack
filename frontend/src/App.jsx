import { useState, useEffect } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [darkMode])

  return (

    <BrowserRouter>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  )
}

export default App