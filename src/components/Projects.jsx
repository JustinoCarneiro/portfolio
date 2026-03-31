import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, Layers, Plus } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'Sistema Lucas (Saúde)',
    description:
      'Sistema completo de prontuário eletrônico e agendamento para o setor de saúde.',
    longDescription:
      'O Sistema Lucas é uma solução de ponta para o setor de saúde, projetada para gerenciar prontuários eletrônicos, agendamentos médicos e o fluxo completo de atendimento ao paciente. Com foco em segurança e auditoria (LGPD), o sistema oferece uma interface intuitiva para médicos e recepcionistas, otimizando a rotina das clínicas e garantindo a integridade dos dados.',
    stack: [
      'Angular (Standalone)',
      'Java Spring Boot',
      'PostgreSQL',
      'Docker',
    ],
    highlight: 'Implementação de auditoria de logs e segurança robusta.',
    Icon: ShieldCheck,
    images: [
      '/assets_portfolio/lucas_dashboard_desktop.webp',
      '/assets_portfolio/lucas_agenda_desktop.webp',
      '/assets_portfolio/lucas_pacientes_desktop.webp',
      '/assets_portfolio/lucas_walkthrough.webp',
    ],
  },
  {
    title: 'Sistema Melvin (Social)',
    description:
      'Plataforma de gestão integrada para instituições sociais e filantrópicas.',
    longDescription: 'O Sistema Melvin foi desenvolvido para otimizar a gestão de instituições do terceiro setor. Ele centraliza o controle de alunos, voluntários e embaixadores, oferecendo dashboards intuitivos e relatórios complexos. A arquitetura limpa garante que o sistema seja sustentável e fácil de manter a longo prazo.',
    stack: [
      'React.js (Vite)',
      'Java Spring Boot 3',
      'PostgreSQL',
    ],
    highlight:
      'Geração de relatórios complexos em Excel e arquitetura limpa.',
    Icon: Layers,
    images: [
      '/assets_portfolio/dashboard_desktop.webp',
      '/assets_portfolio/alunos_desktop.webp',
      '/assets_portfolio/embaixadores_desktop.webp',
      '/assets_portfolio/voluntarios_desktop.webp',
      '/assets_portfolio/sistema_melvin_walkthrough_1774789407124.webp'
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section__header section__header--center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section__title">
            Projetos <span className="accent">Principais</span>
          </h2>
          <p className="section__subtitle">
            Sistemas desenvolvidos com foco em escalabilidade, segurança e
            experiência do usuário.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-card__header">
                <div className="project-card__icon">
                  <project.Icon size={24} />
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Plus size={18} className="project-card__external" title="Ver Detalhes" />
                  <ExternalLink size={18} className="project-card__external" />
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__stack-label">Stack Técnica</div>
              <div className="project-card__tags">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-card__tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card__highlight">
                <span className="project-card__highlight-label">
                  Destaque:{' '}
                </span>
                <span className="project-card__highlight-text">
                  {project.highlight}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
