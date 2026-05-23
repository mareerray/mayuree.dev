// =============================================
// PROJECTS DATA
// To add a new project: copy one object below,
// paste it at the top of the array, and edit it.
// =============================================

export const projects = [
  {
    id: 1,
    title: "Chess — Real-Time Multiplayer",
    description: "A fully functional multiplayer chess game with real-time moves, room creation, and live opponent syncing. Built with Flutter frontend and a Go backend using WebSockets.",
    category: "mobile",    // "web" or "mobile"
    tags: ["Flutter", "Go", "WebSockets", "Render"],
    liveUrl: "#",          // 🔁 Replace with your live URL
    githubUrl: "#",        // 🔁 Replace with your GitHub URL
    featured: false,        // Featured projects appear larger
  },
  {
    id: 2,
    title: "Sky Map",
    description: "An interactive star map using your phone's GPS, accelerometer, and magnetometer. Renders constellations in real time at 10 FPS using Flutter's CustomPainter and BLoC state management.",
    category: "mobile",
    tags: ["Flutter", "BLoC", "GPS", "CustomPainter"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "ColorCurio",
    description: "A color harmony tool — explore palettes, generate complementary colors, and export them. Harmony in Every Hue.",
    category: "web",
    tags: ["JavaScript", "CSS", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Angul-It — CAPTCHA Challenge",
    description: "An Angular-based CAPTCHA app with custom UX thinking and challenge logic. Demonstrates component architecture and form handling.",
    category: "web",
    tags: ["Angular", "TypeScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "2048 — Mobile Game",
    description: "A polished 2048 game with smooth animations, swipe controls, audio feedback, local high score, and accessibility support.",
    category: "mobile",
    tags: ["Flutter", "Dart", "Animations"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Map Markers — GPS Tracker",
    description: "A location tracking app using Google Maps API with persistent storage and real GPS. Demonstrated to startup investors.",
    category: "mobile",
    tags: ["Flutter", "Google Maps", "GPS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "piscine-js-igen — Word Game",
    description: "A creative JavaScript word game built during the Gritlab piscine. Shows logic, DOM manipulation, and game state handling.",
    category: "web",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Daily To-Do",
    description: "A clean, practical to-do app with task management, filtering, and persistence. Simple UI, solid fundamentals.",
    category: "web",
    tags: ["JavaScript", "CSS", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

// All unique categories — used for the filter buttons
export const categories = ["all", "web", "mobile"];
