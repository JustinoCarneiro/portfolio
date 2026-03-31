import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Briefcase, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__text"
            style={{ opacity: 0 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section__title">
              Sobre <span className="accent">mim</span>
            </h2>
            <p>
              Desenvolvedor Full Stack e estudante de Engenharia da Computação na UFC,
              com experiência prática em estágios de TI (TV Jangadeiro, CITINOVA — Fundação de Ciência, Tecnologia e Inovação de Fortaleza, GTEL — Grupo de Pesquisa em Telecomunicações, MOBIT — Mobilidade, Iluminação e Tecnologia)
              e cooperação em projetos com o DET (Departamento de Transportes - UFC) e Labifor (Laboratório de Inovação de Fortaleza).
            </p>
            <p>
              Sou adepto do <span className="text-highlight">Vibe Coding</span> —
              utilizo ferramentas de IA como aceleradoras do desenvolvimento, mas sempre
              com <span className="text-highlight">olhar analítico e crítico</span> sobre
              cada decisão técnica e linha de código gerada. Acredito que a IA é uma aliada
              poderosa, mas o conhecimento de engenharia é o que garante a qualidade.
            </p>
            <p>
              Atualmente, dedico-me a aperfeiçoar o ecossistema{' '}
              <span className="text-highlight">Java</span> e explorar as fronteiras dos{' '}
              <span className="text-highlight">frameworks modernos de frontend</span>,
              buscando sempre o equilíbrio entre robustez no backend e fluidez na interface.
            </p>

            <div className="about__highlights">
              <div className="about__highlight-item">
                <div className="about__highlight-icon">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="about__highlight-title">Formação Acadêmica</h4>
                  <p className="about__highlight-desc">
                    Engenharia da Computação — UFC (em andamento, 2021–2027)
                  </p>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="about__highlight-title">Laboratórios de Tecnologia</h4>
                  <p className="about__highlight-desc">
                    DET (UFC) e Labifor (CITINOVA)
                  </p>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="about__highlight-title">Experiência Profissional</h4>
                  <p className="about__highlight-desc">
                    Jangadeiro · CITINOVA · GTEL · MOBIT
                  </p>
                </div>
              </div>
              <div className="about__highlight-item">
                <div className="about__highlight-icon">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h4 className="about__highlight-title">Metodologia</h4>
                  <p className="about__highlight-desc">
                    Vibe Coding com análise crítica e revisão técnica
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__visual"
            style={{ opacity: 0 }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="about__visual-card">
              <div className="about__visual-gradient" />
              <div className="about__stats">
                <div className="about__stat">
                  <div className="about__stat-value">2+</div>
                  <div className="about__stat-label">Sistemas em Produção</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-value">UFC</div>
                  <div className="about__stat-label">Eng. Computação</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-value">4+</div>
                  <div className="about__stat-label">Estágios em TI</div>
                </div>
                <div className="about__stat">
                  <div className="about__stat-value">2</div>
                  <div className="about__stat-label">Laboratórios</div>
                </div>
              </div>
              <div className="about__focus-card">
                <div className="about__focus-label">
                  <Target
                    size={12}
                    style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'middle' }}
                  />
                  Foco Atual
                </div>
                <p className="about__focus-text">
                  Ecossistema Java & frameworks modernos de frontend
                </p>
              </div>
            </div>
            <div className="about__deco-circle about__deco-circle--1" />
            <div className="about__deco-circle about__deco-circle--2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
