// src/components/home/Skills.tsx
import { SKILLS, LANGUAGES } from '../../data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mis Habilidades
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stack tecnológico
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6 text-center">
                {group.category}
              </h3>
              
              {/* Lista de Skills con Iconos */}
              <div className="flex flex-col gap-3">
                {group.items.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                  >
                    {/* El icono */}
                    <span className="text-xl text-gray-400 group-hover:text-blue-500 transition-colors">
                      <skill.icon />
                    </span>
                    {/* El nombre */}
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Idiomas */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30 text-center"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Idiomas</h3>
          <div className="flex justify-center gap-12">
            {LANGUAGES.map((lang) => (
              <div key={lang.name}>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{lang.name}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;