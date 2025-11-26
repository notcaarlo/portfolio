// src/components/layout/Navbar.tsx
import { useState } from 'react'; // 👈 Importamos useState para controlar el menú
import { PROFILE, NAV_LINKS } from '../../data';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react'; // 👈 Importamos X para cerrar
import { motion, AnimatePresence } from 'framer-motion'; // 👈 Animaciones suaves

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Estado: ¿Está abierto el menú?

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            {PROFILE.name}
          </span>

          {/* Menú Desktop (Solo visible en pantallas medianas+) */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Botón Tema */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-yellow-400 transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Botón Menú Móvil (Solo visible en móvil 'md:hidden') */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 shadow-xl md:hidden"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Cerrar menú al hacer click
                    className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;