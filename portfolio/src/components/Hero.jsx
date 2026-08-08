import HeroParticleBackground from './HeroParticleBackground.jsx';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeInUp, slideIn } from '../utils/motion.js';

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroParticleBackground />

      <motion.div 
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate="show"
        className="hero-content"
      >
        <motion.h1 variants={textVariant(0.1)}>
          Full-stack
          <br />
          <motion.span variants={textVariant(0.3)} style={{ display: 'inline-block' }} className="stroke">+ Mobile</motion.span>
          <br />
          <motion.span variants={textVariant(0.5)} style={{ display: 'inline-block' }} className="lime">Developer</motion.span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="hero-sub">
          I build fast, scalable web and mobile products, from pixel-perfect React UIs to
          robust Node and Python backends and cross-platform Flutter apps.
        </motion.p>

        <motion.div variants={fadeInUp} className="hero-btns">
          <a href="#work" className="btn-primary">
            View my work ↓
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s talk
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={slideIn("up", "spring", 0.6, 1.5)}
        initial="hidden"
        animate="show"
        className="code-block"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="code-dots">
            <span style={{ background: '#FF5F57' }} />
            <span style={{ background: '#FEBC2E' }} />
            <span style={{ background: '#28C840' }} />
          </div>
          <div className="c-muted">
            <span className="c-kw">const</span> <span className="c-fn">developer</span> = {'{'}
            <br />
            &nbsp;&nbsp;name: <span className="c-str">&quot;Gio Anthony Callos&quot;</span>,
            <br />
            &nbsp;&nbsp;role: <span className="c-str">&quot;Fullstack + Mobile&quot;</span>,
            <br />
            &nbsp;&nbsp;stack: [
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&quot;React&quot;</span>,{' '}
            <span className="c-str">&quot;Node.js&quot;</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&quot;Flutter&quot;</span>,{' '}
            <span className="c-str">&quot;React Native&quot;</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&quot;PostgreSQL&quot;</span>,{' '}
            <span className="c-str">&quot;Docker&quot;</span>
            <br />
            &nbsp;&nbsp;]
            <br />
            {'}'};
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
