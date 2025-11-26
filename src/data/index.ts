// src/data/index.ts
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiPython, 
  SiPostgresql, 
  SiNodedotjs, 
  SiGit, 
  SiGithub, 
  SiDotnet, 
  // SiVisualstudiocode <-- ESTE LO QUITAMOS PORQUE DIO ERROR
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';

export const PROFILE = {
  name: "Carlo Villanueva",
  role: "Estudiante",
  bio: "Siempre apasionado por crear soluciones y proyectos. Aprendiendo siempre y con un fuerte interés en la integración de Inteligencia Artificial.",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/notcaarlo",
  linkedin: "https://www.linkedin.com/in/carlo-andr%C3%A9-villanueva-cord%C3%B3n-69478b237/",
  email: "mailto:andrecordon00@gmail.com"
};

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Node.js", icon: SiNodedotjs }
    ]
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode }
    ]
  },
  {
    category: "Aprendiendo / Básico",
    items: [
      { name: ".NET Ecosystem", icon: SiDotnet },
    ]
  }
];

export const LANGUAGES = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Estudiante (IGA)" },
];

export const PROJECTS = [
  {
    title: "Detector de Somnolencia",
    description: "Sistema inteligente capaz de detectar signos de fatiga en tiempo real para prevenir accidentes.",
    tech: ["Flask", "MediaPipe", "PostgreSQL"],
    github: "https://github.com/notcaarlo/Somnolencia-Carlo",
    demo: "", 
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop"
  },
];

export const NAV_LINKS = [
  { name: "Inicio", href: "#home" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];