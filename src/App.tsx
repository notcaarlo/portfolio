// src/App.tsx
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Skills from './components/home/Skills';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';
import Background from './components/layout/Background';
import Footer from './components/layout/Footer'; // 👈 Importar el nuevo Footer

function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App