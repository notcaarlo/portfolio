// src/components/home/Contact.tsx
import { SOCIAL_LINKS } from '../../data';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 transition-colors relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge 'Hablemos' */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Hablemos
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo posible por responderte!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botón Principal de Email */}
            <a 
              href={SOCIAL_LINKS.email}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-blue-900/10"
            >
              <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Escríbeme un correo
            </a>

            {/* Botón Secundario LinkedIn */}
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-white rounded-full font-medium border border-gray-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Conectar en LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;