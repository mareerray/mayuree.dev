# My Portfolio — React

A portfolio website built with React + Vite.  
This is my first React project — converted from a plain HTML portfolio.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── main.jsx              ← App entry point
├── App.jsx               ← Root layout (add/remove sections here)
├── data/
│   └── projects.js       ← 🔁 Edit your project list here
├── styles/
│   ├── tokens.css        ← Colors, spacing, font sizes
│   └── base.css          ← Global base styles
└── components/
    ├── Navbar/           ← Navigation + theme toggle
    ├── Hero/             ← Name, title, intro, CTA buttons
    ├── Skills/           ← Tech badges grouped by category
    ├── Projects/         ← Project cards with filter (All/Web/Mobile)
    ├── Contact/          ← Email + social links
    └── Footer/           ← Copyright
```

---

## ✏️ How to Edit Content

| What to change | Where to find it |
|---|---|
| Your projects | `src/data/projects.js` |
| Hero text / bio | `src/components/Hero/Hero.jsx` |
| Skills list | `src/components/Skills/Skills.jsx` |
| Email & social links | `src/components/Contact/Contact.jsx` |
| Colors / fonts | `src/styles/tokens.css` |

---

## 🌐 Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com
3. Click "Import Project" → select your repo
4. Click Deploy — done! ✅

---

## React Concepts Practiced Here

- `useState` — theme toggle, project filter
- `useEffect` — scroll reveal animations
- `props` — passing data to components
- `.map()` — rendering project cards from data
- `.filter()` — filtering projects by category
- CSS Modules — scoped styles per component
