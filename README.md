# 🌿 Portfolio — React + GSAP + Three.js

A stunning developer portfolio with Three.js particle backgrounds, GSAP scroll animations,
and a forest green design system (#3C603C · #729146 · #FFFFFF).

## 📁 File Structure

```
portfolio/
├── index.html                     # Entry HTML (Google Fonts loaded here)
├── vite.config.js                 # Vite config
├── package.json                   # Dependencies
└── src/
    ├── main.jsx                   # React entry point
    ├── App.jsx                    # Root component — assembles all sections
    ├── styles/
    │   └── globals.css            # CSS variables, reset, scrollbar, cursor
    ├── components/
    │   ├── Navbar.jsx             # Sticky nav with GSAP entrance + scroll effect
    │   ├── Navbar.css
    │   ├── ThreeBackground.jsx    # Three.js floating particles + rings (Canvas)
    │   ├── Cursor.jsx             # Custom dot + follower cursor
    │   ├── Footer.jsx             # Footer with nav links + tech stack
    │   └── Footer.css
    └── sections/
        ├── Hero.jsx               # Photo + name + CTA + floating animation
        ├── Hero.css
        ├── About.jsx              # Bio + stats cards
        ├── About.css
        ├── Colleges.jsx           # Timeline-style education section
        ├── Colleges.css
        ├── Projects.jsx           # Filterable project grid with hover overlays
        ├── Projects.css
        ├── Skills.jsx             # 9 skills with icons + animated progress bars
        ├── Skills.css
        ├── Contact.jsx            # Contact links + working form
        └── Contact.css
```

## 🚀 Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open → http://localhost:3000

## 🎨 Customisation Checklist

| File | What to Change |
|------|---------------|
| `Hero.jsx` | Replace photo URL, name, role titles, bio |
| `About.jsx` | Update bio paragraphs, stats |
| `Colleges.jsx` | Add your real institutions, grades, years |
| `Projects.jsx` | Replace project titles, descriptions, images, links |
| `Skills.jsx` | Adjust skill percentages |
| `Contact.jsx` | Replace email, LinkedIn, GitHub handles |
| `Footer.jsx` | Update name and social links |

## 🛠 Tech Stack

- **React 18** — UI framework
- **Three.js + @react-three/fiber** — 3D particle canvas background
- **GSAP + ScrollTrigger** — Page entrance + scroll-driven animations
- **Vite** — Lightning fast dev server
- **Devicon CDN** — Skill icons

## 🎨 Design Tokens

```css
--forest:  #3C603C   /* dark green — borders, rings */
--moss:    #729146   /* bright green — accents, highlights */
--white:   #FFFFFF   /* text, buttons */
--dark:    #1a1f1a   /* background */
```

## 📦 Build for Production

```bash
npm run build    # outputs to /dist
npm run preview  # preview production build locally
```