import HeroParticleBackground from './HeroParticleBackground.jsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, textVariant, fadeInUp, slideIn, zoomIn } from '../utils/motion.js';

function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 250]);
  const yBg = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero" id="top" style={{ perspective: '1000px', overflow: 'hidden' }}>
      <motion.div style={{ y: yBg, width: '100%', height: '100%', position: 'absolute' }}>
        <HeroParticleBackground />
      </motion.div>

      <motion.div 
        variants={staggerContainer(0.25, 0.2)}
        initial="hidden"
        animate="show"
        style={{ y: yText, opacity, transformStyle: 'preserve-3d' }}
        className="hero-content"
      >
        <motion.h1 
          variants={zoomIn(0.1, 1.5)}
          style={{ 
            display: 'inline-block',
            transformOrigin: 'left center'
          }}
        >
          Full-stack
          <br />
          <motion.span 
            variants={textVariant(0.4)} 
            style={{ display: 'inline-block' }} 
            className="stroke"
          >
            + Mobile
          </motion.span>
          <br />
          <motion.span 
            variants={textVariant(0.7)} 
            style={{ display: 'inline-block', textShadow: '0 0 40px rgba(200,241,53,0.5)' }} 
            className="lime"
          >
            Developer
          </motion.span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="hero-sub" style={{ backdropFilter: 'blur(10px)', padding: '1rem', borderRadius: '12px', background: 'rgba(26,26,26,0.5)' }}>
          I build fast, scalable web and mobile products, from pixel-perfect React UIs to
          robust Node and Python backends and cross-platform Flutter apps.
        </motion.p>

        <motion.div variants={zoomIn(1, 1)} className="hero-btns">
          <motion.a 
            href="#work" 
            className="btn-primary"
            whileHover={{ scale: 1.15, rotate: -2, boxShadow: '0 0 30px #c8f135' }}
            whileTap={{ scale: 0.9 }}
          >
            View my work ↓
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn-ghost"
            whileHover={{ scale: 1.15, rotate: 2, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.9 }}
          >
            Let&apos;s talk
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "spring", 0.8, 2)}
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
