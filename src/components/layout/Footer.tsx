// src/components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 relative z-10">
      <div className="max-w-6xl mx-auto px-6 border-t border-gray-100 dark:border-slate-800/50 pt-8">
        <p className="flex items-center justify-center gap-2 font-medium">
          Carlo Villanueva. Hecho con 
          {/* Corazón rojo con una animación sutil de latido */}
          <span className="text-red-500 animate-pulse text-lg">♥️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;