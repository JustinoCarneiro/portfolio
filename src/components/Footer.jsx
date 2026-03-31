import React from 'react';
import { Cpu, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#" className="footer__logo">
          <Cpu size={22} />
          <span>MARCOS</span>
        </a>

        <p className="footer__copy">
          &copy; {currentYear} Marcos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
