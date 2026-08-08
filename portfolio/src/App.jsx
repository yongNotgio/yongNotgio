import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import {
  StatsBand,
  Projects,
  Skills,
  Achievements,
  Contact,
  Footer,
} from './components/Sections.jsx';
import { projects as fetchedProjects } from './data/projectsData.auto.js';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          background: 'var(--lime)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          zIndex: 9999,
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <StatsBand projectCount={fetchedProjects.length} />
        <Projects projectsData={fetchedProjects} />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
