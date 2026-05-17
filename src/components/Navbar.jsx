import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const navLinks = ['Home', 'About', 'Colleges', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(logoRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
    tl.fromTo(linksRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.4')
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.to(navRef.current, {
      background: scrolled ? 'rgba(26,31,26,0.95)' : 'transparent',
      boxShadow: scrolled ? '0 1px 0 rgba(114,145,70,0.2)' : 'none',
      duration: 0.4
    })
  }, [scrolled])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-inner">
        <div ref={logoRef} className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Chayan</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link, i) => (
            <li key={link} ref={el => linksRef.current[i] = el}>
              <button onClick={() => scrollTo(link)} className="nav-link">
                <span className="link-num">0{i + 1}.</span>{link}
              </button>
            </li>
          ))}
          <li ref={el => linksRef.current[navLinks.length] = el}>
            <a href="/ChayanPal.pdf" download="ChayanPal.pdf" className="nav-cta" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}