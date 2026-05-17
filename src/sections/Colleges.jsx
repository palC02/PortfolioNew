import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Colleges.css'
gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    degree: 'MSc in Computer Science',
    institution: "St. Xavier's College Kolkata",
    year: '2024 – 2026', grade: 'CGPA: 6.5 / 10', location: 'Kolkata, West Bengal', type: 'Postgraduate',
    courses: ['Data Structures', 'Machine Learning', 'Database Management', 'Operating Systems', 'Computer Networks'],
    image: 'st.jpeg'
  },
  {
    degree: 'BSc in Computer Science', 
    institution: 'Ramakrishna Mission Vivekananda Centenary College',
    year: '2021 – 2024', grade: 'CGPA: 8.5 / 10', location: 'Kolkata, West Bengal', type: 'Undergraduate',
    courses: ['Programming in C', 'Data Science with Python', 'Web Development', 'Algorithms and Complexity','Networking Fundamentals','Operating Systems'],
    image: 'rkm.jpeg'
  },
  {
    degree: 'Higher Secondary (Class XII)', institution: 'Karimpur Jagannath High School',
    year: '2019 – 2021', grade: 'Percentage: 85%', location: 'Karimpur, West Bengal', type: 'Pre-College',
    courses: ['Physics', 'Chemistry', 'Mathematics'],
    image: 'kp.jpeg'
  }
]

export default function Colleges() {
  const sectionRef = useRef()
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 60, x: i % 2 === 0 ? -30 : 30 }, {
        opacity: 1, y: 0, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 82%' }, delay: i * 0.1
      })
    })
  }, [])

  return (
    <section id="colleges" ref={sectionRef} className="colleges">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">03. Education</span>
          <h2 className="section-title">Academic <em>Journey</em></h2>
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          {education.map((edu, i) => (
            <div key={i} ref={el => cardsRef.current[i] = el} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" />
              <div className="edu-card" style={{ backgroundImage: `url(${edu.image})` }}>
                <div className="edu-card-overlay" />
                <div className="edu-card-top">
                  <span className="edu-type">{edu.type}</span>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-location">📍 {edu.location}</p>
                <div className="edu-grade">{edu.grade}</div>
                <div className="edu-courses">
                  {edu.courses.map(c => <span key={c} className="edu-course">{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}