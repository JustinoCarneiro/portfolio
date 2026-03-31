import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Settings, Terminal } from 'lucide-react';

const categories = [
  {
    title: 'Backend',
    Icon: Server,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 88 },
      { name: 'Hibernate / JPA', level: 82 },
    ],
  },
  {
    title: 'Frontend',
    Icon: Layout,
    skills: [
      { name: 'Angular', level: 85 },
      { name: 'React.js', level: 80 },
    ],
  },
  {
    title: 'DevOps & DB',
    Icon: Settings,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Bash Scripts', level: 72 },
    ],
  },
];

const getLevelLabel = (level) => {
  if (level >= 85) return 'Avançado';
  if (level >= 70) return 'Intermediário';
  return 'Básico';
};

const SkillBar = ({ level }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item__bar" ref={ref}>
      <div
        className="skill-item__bar-fill"
        style={{
          transform: visible ? `scaleX(${level / 100})` : 'scaleX(0)',
        }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="skills__header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section__title">
              Habilidades <span className="accent">Técnicas</span>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="skill-card__header">
                <div className="skill-card__icon">
                  <cat.Icon size={18} />
                </div>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>

              <div className="skill-card__list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item__info">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                    <SkillBar level={skill.level} />
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
