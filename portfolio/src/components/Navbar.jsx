import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="nav" 
      className={scrolled ? 'scrolled' : ''}
    >
      <a href="#" className="nav-logo">
        gio<span>.</span>dev
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#wins">Wins</a>
        <a href="#contact">Contact</a>
        <a
          href="/Resume%20(GioAnthonyCallos).pdf"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
