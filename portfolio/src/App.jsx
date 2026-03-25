import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Awards from './components/Awards.jsx';
import Footer from './components/Footer.jsx';
import { projects } from './data/projectsData.auto.js';

const pinnedRepoNames = new Set([
  'unblot',
  'logsync',
  'night_walkers_app',
  'wvsu-lf',
  'diatrack',
  'diatrack1',
]);

function extractRepoName(githubUrl = '') {
  const parts = githubUrl.split('/').filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1].toLowerCase() : '';
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const pinnedProjects = useMemo(
    () => projects.filter((project) => pinnedRepoNames.has(extractRepoName(project.githubUrl))),
    []
  );

  const categories = useMemo(() => {
    const uniqueCategories = new Set();
    pinnedProjects.forEach((project) => {
      (project.category || []).forEach((category) => uniqueCategories.add(category));
    });
    return ['All', ...Array.from(uniqueCategories)];
  }, [pinnedProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return pinnedProjects;
    return pinnedProjects.filter((project) => project.category.includes(activeCategory));
  }, [activeCategory, pinnedProjects]);

  return (
    <div className="bg-dark min-h-screen overflow-x-hidden relative isolate">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Projects
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            projects={filteredProjects}
          />
          <Awards />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
