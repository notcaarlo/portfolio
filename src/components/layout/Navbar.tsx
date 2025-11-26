// src/components/layout/Navbar.tsx
import { PROFILE, NAV_LINKS } from '../../data';
import { useTheme } from '../../hooks/useTheme'; // Importamos nuestro hook
import { Sun, Moon, Menu } from 'lucide-react'; // Iconos nuevos

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          {PROFILE.name}
        </span>

        <div className="flex items-center gap-6">
          {/* Links Desktop */}
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

          {/* Botón Toggle Dark/Light */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-yellow-400 transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Menú Móvil (Icono) */}
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
             <Menu size={24} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;