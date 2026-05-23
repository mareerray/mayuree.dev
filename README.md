
# mayuree.dev — Personal Portfolio

Personal portfolio site built with React, Vite, and CSS Modules. Showcasing web and Flutter mobile projects.

🌐 **Live site:** [mayuree.dev](https://mayuree.dev)

---

## About This Project

This portfolio was built from scratch as a React learning project — converting a plain HTML/CSS portfolio into a fully component-based React application. It demonstrates real-world React patterns used in professional frontend development.

**Key features:**
- Component-based architecture with reusable, isolated components
- Dynamic project filtering by category (All / Web / Mobile) using `useState`
- Scroll reveal animations using `useEffect` and `IntersectionObserver`
- Dark / light mode toggle with system preference detection
- Fully responsive — mobile-first layout from 375px to 1440px+
- CSS Modules for scoped, collision-free styles per component

---

## Built With

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI component library |
| [Vite](https://vitejs.dev) | Build tool and dev server |
| CSS Modules | Scoped component styles |
| [Fontshare](https://www.fontshare.com) | Cabinet Grotesk + Satoshi fonts |

---

## React Concepts Practiced

This project was intentionally built to practice core React skills that Finnish employers look for:

- `useState` — theme toggle state, active filter state
- `useEffect` — side effects (scroll animations, DOM updates)
- `props` — passing data and functions between components
- `.map()` — rendering lists of project cards from a data array
- `.filter()` — filtering projects by category
- CSS Modules — scoped styles, no global class conflicts
- Component composition — small, focused, reusable components

---

## Project Structure

```
src/
├── main.jsx ← App entry point
├── App.jsx ← Root layout
├── data/
│ └── projects.js ← Project data array
├── styles/
│ ├── tokens.css ← Design tokens (colors, spacing, type scale)
│ └── base.css ← Global base styles
└── components/
├── Navbar/ ← Sticky nav + dark/light toggle
├── Hero/ ← Name, title, bio, CTA buttons
├── Skills/ ← Tech skills grouped by category
├── Projects/ ← Filterable project cards
├── Contact/ ← Email + social links
└── Footer/ ← Copyright
```
---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Deployment

Deployed on **Vercel** with automatic deploys on every push to `main`.

---

## Author

**Mayuree Reunsati** — Frontend & Mobile Developer  
Graduating from [Gritlab](https://gritlab.ax), Åland, Finland  
Open to frontend, mobile, and full-stack opportunities across Finland.

[GitHub](https://github.com/mareerray) · [LinkedIn](https://www.linkedin.com/in/mayuree-reunsati) · [mayuree.dev](https://mayuree.dev)