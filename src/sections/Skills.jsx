import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    name: 'Machine Learning',
    level: 88,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    category: 'AI/ML',
    color: '#FF6F00'
  },
  {
    name: 'Python',
    level: 92,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'Language',
    color: '#3776AB'
  },
  {
    name: 'C Language',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    category: 'Language',
    color: '#A8B9CC'
  },
  {
    name: 'Data Science',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    category: 'AI/ML',
    color: '#150458'
  },
  {
    name: 'React',
    level: 87,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend',
    color: '#61DAFB'
  },
  {
    name: 'Tailwind CSS',
    level: 83,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    category: 'Frontend',
    color: '#06B6D4'
  },
  {
    name: 'Dart',
    level: 78,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    category: 'Language',
    color: '#0175C2'
  },
  {
    name: 'Flutter',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    category: 'Mobile',
    color: '#54C5F8'
  },
  {
    name: 'MongoDB',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Database',
    color: '#4DB33D'
  }
]

export default function Skills() {
  const sectionRef = useRef()
  const cardsRef = useRef([])
  const barsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(cardsRef.current.filter(Boolean),
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )

    barsRef.current.filter(Boolean).forEach((bar, i) => {
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: skills[i].level + '%',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 90%' },
          delay: i * 0.05
        }
      )
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">05. Skills</span>
          <h2 className="section-title">My <em>Toolbox</em></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              ref={el => cardsRef.current[i] = el}
              className="skill-card"
            >
              <div className="skill-icon-wrap">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div className="skill-icon-glow" style={{ background: skill.color + '22' }} />
              </div>
              <div className="skill-info">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    ref={el => barsRef.current[i] = el}
                    className="skill-bar-fill"
                    style={{ background: `linear-gradient(90deg, var(--forest), var(--moss))` }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-extra">
          <p className="skills-extra-label">Also familiar with:</p>
          <div className="skills-extra-tags">
            {['Git', 'Linux', 'Docker', 'NumPy', 'Scikit-learn', 'Figma', 'REST APIs', 'Firebase', 'Node.js'].map(t => (
              <span key={t} className="extra-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}