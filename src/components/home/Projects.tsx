// src/components/home/Projects.tsx
import { PROJECTS } from '../../data';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Imagen del proyecto */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags de tecnología */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Github size={18} /> Código
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;