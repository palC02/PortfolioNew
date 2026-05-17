import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>Chayan<span className="logo-bracket">/&gt;</span>
            </span>
            <p className="footer-tagline">Building the future, one step at a time.</p>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-col">
              <span className="footer-nav-title">Navigate</span>
              {['Home', 'About', 'Colleges', 'Projects', 'Skills', 'Contact'].map(link => (
                <button key={link} className="footer-nav-link" onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}>
                  {link}
                </button>
              ))}
            </div>
            <div className="footer-nav-col">
              <span className="footer-nav-title">Social</span>
              {[
                { name: 'GitHub', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'Instagram', href: '#' }
              ].map(s => (
                <a key={s.name} href={s.href} className="footer-nav-link" target="_blank" rel="noreferrer">{s.name}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <span className="copy-name">Chayan</span>. Designed & Built with{' '}
            <span className="heart">♥</span> using React, Three.js & GSAP.
          </p>
          <div className="footer-stack">
            {['React', 'Three.js', 'GSAP'].map(t => (
              <span key={t} className="footer-tech">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}