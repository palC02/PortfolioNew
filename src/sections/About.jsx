import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'
gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '8+', label: 'Technologies' },
  { value: '100%', label: 'Passion' },
]

export default function About() {
  const sectionRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    gsap.fromTo(leftRef.current, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } })
    gsap.fromTo(rightRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } })
    gsap.fromTo(statsRef.current.children, { opacity: 0, y: 40, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)', scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">02. About Me</span>
          <h2 className="section-title">The Person Behind <em>the Code</em></h2>
        </div>
        <div className="about-grid">
          <div ref={leftRef} className="about-image-col">
            <div className="about-img-wrapper">
              <img src="hero.jpeg" alt="Coding" className="about-img" />
              <div className="about-img-decor"><span className="decor-code">{'{ developer }'}</span></div>
            </div>
          </div>
          <div ref={rightRef} className="about-text-col">
            <p className="about-para">Hi! I'm a passionate developer with a strong foundation in both <strong>machine learning</strong> and <strong> full-stack development</strong>. I love solving complex problems and building experiences that are both technically sound and visually delightful.</p>
            <p className="about-para">My journey started with C programming, grew through Python and data science, and expanded into modern web and mobile development with React, Flutter, and MongoDB. I'm equally comfortable training a neural network and shipping a polished Flutter app.</p>
            <p className="about-para">When I'm not coding, I'm exploring new ML papers, contributing to open-source, or experimenting with creative side projects.</p>
            <div className="about-tags">
              {['Problem Solver', 'ML Enthusiast', 'Open Source', 'Clean Code', 'UI/UX Minded'].map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div ref={statsRef} className="stats-row">
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}