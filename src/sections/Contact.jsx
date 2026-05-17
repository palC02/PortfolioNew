import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const contactLinks = [
  { label: 'Email', value: 'chayanpal6666@gmail.com', href: 'mailto:chayanpal6666@gmail.com', icon: '✉' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ChayanPal', href: 'https://www.linkedin.com/in/chayan-pal-580058260', icon: '⌘' },
  { label: 'GitHub', value: 'github.com/ChayanPal', href: 'https://github.com/palC02', icon: '⌥' },
  { label: 'Instagram', value: 'instagram.com/yourhandle', href: 'https://www.instagram.com/ig__cyclonic?igsh=MWd2ZTQ5ZXc4MXoxcA%3D%3D&utm_source=qr', icon: '◈' },
]

export default function Contact() {
  const sectionRef = useRef()
  const formRef = useRef()
  const infoRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    gsap.fromTo(infoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
    )
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">06. Contact</span>
          <h2 className="section-title">Let's <em>Connect</em></h2>
        </div>

        <div className="contact-grid">
          <div ref={infoRef} className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of something amazing. Feel free to reach out!
            </p>

            <div className="contact-links">
              {contactLinks.map(link => (
                <a key={link.label} href={link.href} className="contact-link-item">
                  <span className="contact-icon">{link.icon}</span>
                  <div>
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="availability">
              <span className="avail-dot" />
              <span>Currently available for internships or full-time roles</span>
            </div>
          </div>

          <div ref={formRef} className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text" required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  required rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send Message →'}
              </button>
              {status === 'sent' && (
                <p className="form-success">Thanks! I'll get back to you within 24 hours.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}