import { useEffect } from 'react';
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
import { ThemeProvider } from './components/ThemeProvider.jsx';
import { projects as fetchedProjects } from './data/projectsData.auto.js';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div>
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
    </ThemeProvider>
  );
}

export default App;
