// src/components/home/Hero.tsx
import { PROFILE, SOCIAL_LINKS } from '../../data';
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import YoImg from '../../assets/img/Yo.jpg';

const Hero = () => {
  return (
    // 1. Quitamos 'overflow-hidden' global y ajustamos el padding para móvil
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-16 md:overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Columna Izquierda: Textos */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mx-auto md:mx-0"
          >
            👋 Disponible para trabajar
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Hola, soy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {PROFILE.name.split(' ')[0]}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            {PROFILE.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          >
            <a 
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:scale-105"
            >
              Ver Proyectos <ArrowRight size={20} />
            </a>

            <div className="flex items-center gap-4 border-l pl-4 border-gray-200 dark:border-gray-700">
              {[
                { href: SOCIAL_LINKS.github, icon: Github },
                { href: SOCIAL_LINKS.linkedin, icon: Linkedin },
                { href: SOCIAL_LINKS.email, icon: Mail }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha: Foto */}
        {/* 2. AGREGADO 'relative' y 'z-10' al contenedor padre para asegurar posición */}
        <div className="relative order-1 md:order-2 mb-8 md:mb-0 flex justify-center z-10">
          
          {/* Fondo borroso (Aseguramos que esté DETRÁS con -z-10) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            // 3. AGREGADO 'relative z-20' a la foto misma para que nada la tape
            className="relative z-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          >
            <div className="w-full h-full bg-white dark:bg-slate-800 p-2 rounded-full shadow-2xl">
              <img 
                src={YoImg} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-700" 
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Flecha de Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hidden md:block" // Ocultamos flecha en móvil si estorba
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>
  );
};

export default Hero;