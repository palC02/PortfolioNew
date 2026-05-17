import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar.jsx'
import Cursor from './components/Cursor.jsx'
import ThreeBackground from './components/ThreeBackground.jsx'
import Footer from './components/Footer.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Colleges from './sections/Colleges.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <>
      <Cursor />
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Colleges />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}