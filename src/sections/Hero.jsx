import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

export default function Hero() {
  const taglineRef = useRef()
  const nameRef = useRef()
  const roleRef = useRef()
  const photoRef = useRef()
  const ctaRef = useRef()
  const decorRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 })
    tl.fromTo(taglineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .fromTo(nameRef.current.querySelectorAll('.char'), { opacity: 0, y: 80, rotateX: -90 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.04, ease: 'back.out(1.5)' }, '-=0.2')
    .fromTo(roleRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
    .fromTo(photoRef.current, { opacity: 0, scale: 0.8, rotate: -8 }, { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: 'back.out(1.2)' }, '-=0.8')
    .fromTo(ctaRef.current.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
    .fromTo(decorRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.8')
    gsap.to(photoRef.current, { y: -12, duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.5 })
  }, [])

  const name = 'CHAYAN'
  const chars = name.split('').map((c, i) => (
    <span key={i} className="char" style={{ display: 'inline-block' }}>{c === ' ' ? '\u00A0' : c}</span>
  ))

  return (
    <section id="home" className="hero">
      <div ref={decorRef} className="hero-decor">
        <div className="decor-line decor-line-1" />
        <div className="decor-line decor-line-2" />
        <div className="decor-dot decor-dot-1" />
        <div className="decor-dot decor-dot-2" />
        <div className="decor-grid" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p ref={taglineRef} className="hero-tagline"><span className="tagline-bar" />Hello, World! I'm</p>
          <h1 ref={nameRef} className="hero-name">CHAYAN</h1>
          <p ref={roleRef} className="hero-role">
            ML Engineer <span className="role-divider">·</span> Full Stack Developer
          </p>
          <p className="hero-desc">Crafting intelligent systems and beautiful interfaces — from machine learning models to polished mobile apps. I turn data into insights and ideas into products.</p>
          <div ref={ctaRef} className="hero-cta">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View Projects <span className="btn-arrow">→</span></button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get In Touch</button>
          </div>
        </div>
        <div className="hero-visual">
          <div ref={photoRef} className="photo-wrapper">
            <div className="photo-border-outer" />
            <div className="photo-border-inner" />
            <div className="photo-frame">
              <img src="me.jpeg" alt="Chayan Pal" className="profile-photo" />
              <div className="photo-overlay" />
            </div>
            <div className="photo-badge"><span className="badge-dot" />Available for work</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-hint"><span>Scroll</span><div className="scroll-line" /></div>
    </section>
  )
}