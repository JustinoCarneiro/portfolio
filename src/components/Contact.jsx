import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/marcosjustino161@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success !== "false") {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else if (data.message && data.message.includes('Activation')) {
        alert('Formulário quase pronto! Verifique seu e-mail (marcosjustino161@gmail.com) para ativar o recebimento de mensagens.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      alert('Erro de conexão. Verifique sua internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section__title">
              Vamos <span className="accent">Conversar</span>?
            </h2>
            <p className="section__subtitle" style={{ marginBottom: '2.5rem' }}>
              Estou sempre aberto a novas oportunidades, colaborações ou apenas
              um papo sobre tecnologia. Sinta-se à vontade para entrar em
              contato!
            </p>

            <div className="contact__info-links">
              <a href="mailto:marcosjustino161@gmail.com" className="contact__link-card">
                <div className="contact__link-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="contact__link-label">E-mail</p>
                  <p className="contact__link-value">marcosjustino161@gmail.com</p>
                </div>
              </a>

              <div className="contact__social-row">
                <a
                  href="https://github.com/JustinoCarneiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-btn"
                >
                  <Github size={18} /> Github
                </a>
                <a
                  href="https://www.linkedin.com/in/antonio-marcos-justino-carneiro-b835a11aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-btn"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="form-group">
                <label className="form-group__label" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="form-group__input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-group__label" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="form-group__input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-group__label" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder="Como posso ajudar?"
                  className="form-group__textarea"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn btn--primary btn--full ${isSubmitting ? 'btn--loading' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'} <Send size={16} />
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="contact__success-msg"
                  style={{ 
                    marginTop: '1rem', 
                    color: '#10b981', 
                    fontWeight: '500',
                    textAlign: 'center',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.75rem',
                    borderRadius: '0.5rem'
                  }}
                >
                  Mensagem enviada com sucesso!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
