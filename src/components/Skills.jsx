import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Settings, Terminal } from 'lucide-react';

const categories = [
  {
    title: 'Backend',
    Icon: Server,
    skills: ['Java', 'Spring Boot', 'Hibernate / JPA'],
  },
  {
    title: 'Frontend',
    Icon: Layout,
    skills: ['Angular', 'React.js'],
  },
  {
    title: 'DevOps & DB',
    Icon: Settings,
    skills: ['Docker', 'PostgreSQL', 'Bash Scripts'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="skills__header">
          <motion.div
            style={{ opacity: 0 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section__title">
              Habilidades <span className="accent">técnicas</span>
            </h2>
            <p className="section__subtitle">
              Conjunto de ferramentas e tecnologias que utilizo para criar
              soluções robustas.
            </p>
          </motion.div>

          <motion.div
            className="skills__terminal-hint"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Terminal size={14} />
            <span>ls skills/ --all</span>
          </motion.div>
        </div>

        <div className="skills__grid">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="skill-card"
              style={{ opacity: 0 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
>
              <div className="skill-card__header">
                <div className="skill-card__icon">
                  <cat.Icon size={18} />
                </div>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>

              <div className="skill-card__list--simple">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-item--simple">
                    <div className="skill-dot" />
                    <span className="skill-item__name">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
