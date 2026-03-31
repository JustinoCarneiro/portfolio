import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Terminal, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero section">
      {/* Animated Background Orbs */}
      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />
      <div className="hero__bg-orb hero__bg-orb--3" />

      {/* Floating Particles */}
      <div className="hero__particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="hero__particle" />
        ))}
      </div>

      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal />
            <span>Disponível para novos projetos</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Marcos{' '}
            <span className="text-gradient">| Full Stack Developer</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Desenvolvimento de sistemas{' '}
            <span className="text-highlight">robustos e escaláveis</span>.
            Transformando requisitos complexos em soluções elegantes.
          </motion.p>

          <motion.div
            className="hero__vibe-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sparkles size={16} />
            <span>Adepto do <strong>Vibe Coding</strong> — com olhar analítico sobre cada linha gerada.</span>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a href="#projects" className="btn btn--primary">
              Ver Projetos <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn btn--outline">
              Contato
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
