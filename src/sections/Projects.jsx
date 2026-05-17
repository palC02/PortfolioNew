import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Malware Detector',
    desc: 'Deep Learning based Intelligent Malware Detection System',
    tags: ['Python', 'Deep Learning', 'Flask', 'Machine Learning'],
    image: 'malware.png',
    live: '#', github: '#',
    category: 'ML'
  },
  {
    title: 'Data Analytics Dashboard',
    desc: 'Interactive business intelligence dashboard with real-time data visualization, drill-down reports, and predictive analytics powered by ML models.',
    tags: ['React', 'Python', 'MongoDB', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    live: '#', github: '#',
    category: 'Data'
  },
  {
    title: 'Food Ordering App',
    desc: 'Full-featured mobile shopping app with authentication, cart management, payment integration, and real-time order tracking built with Flutter & Dart.',
    tags: ['Flutter', 'Dart', 'MongoDB', 'Firebase'],
    image: 'foodapp.png',
    live: '#', github: '#',
    category: 'Mobile'
  },
  {
    title: 'Portfolio Website',
    desc: 'This stunning portfolio with Three.js particle backgrounds, GSAP scroll animations, and a custom design system built in React.',
    tags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
    image: 'portfolio.png',
    live: '#', github: '#',
    category: 'Web'
  },
  {
    title: 'Photo-Showcasing Website',
    desc: 'Created an responsive website to showcase photos from my trips with smooth scrolling and animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'photowebsite.png',
    live: 'https://palc02.github.io/Photography/', github: '#',
    category: 'Web'
  },
  {
    title: 'PDF to AI Generated Video',
    desc: 'Using Gemini API and LLM models, I have created a PDF to AI Generated Video website. By uploading a text file containing story or script, AI narrates and generates the video based on the text.',
    tags: ['Python', 'Gemini API', 'Flask', 'Tailwind CSS', 'LLM Models', 'GSAP'],
    image: 'pdftovid.png',
    live: '#', github: '#',
    category: 'AI'
  }
]

const categories = ['All', 'ML', 'Web', 'Mobile', 'Data', 'AI']

export default function Projects() {
  const sectionRef = useRef()
  const cardsRef = useRef([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    gsap.fromTo(cardsRef.current.filter(Boolean),
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
  }, [activeFilter])

  return (
    <section id="projects" ref={sectionRef} className="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">04. Projects</span>
          <h2 className="section-title">Things I've <em>Built</em></h2>
        </div>

        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              ref={el => cardsRef.current[i] = el}
              className={`project-card ${hoveredIdx === i ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-img-overlay">
                  <div className="project-overlay-links">
                    <a href={project.live} className="overlay-btn" target="_blank" rel="noreferrer">
                      ↗ Live Demo
                    </a>
                    <a href={project.github} className="overlay-btn outline" target="_blank" rel="noreferrer">
                      ⌥ GitHub
                    </a>
                  </div>
                </div>
                <span className="project-category-badge">{project.category}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}