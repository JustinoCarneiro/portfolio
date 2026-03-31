import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <div className="modal-body">
          <h2 className="modal-title section__title">{project.title}</h2>
          <p className="modal-desc">{project.longDescription || project.description}</p>

          <div className="modal-gallery">
            {project.images && project.images.map((img, idx) => (
              <div key={idx} className="modal-image-container">
                <img 
                  src={img} 
                  alt={`${project.title} screenshot ${idx + 1}`} 
                  className="modal-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="modal-meta">
            <div>
              <h4 className="modal-meta-title">Stack Técnica</h4>
              <div className="modal-tags">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-card__tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="modal-meta-title">Destaque do Projeto</h4>
              <p className="project-card__highlight-text" style={{ fontStyle: 'normal' }}>
                {project.highlight}
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn--primary modal-link-btn" onClick={onClose}>
              Voltar aos Projetos <Cpu size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
