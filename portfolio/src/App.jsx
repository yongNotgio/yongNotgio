import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Awards from './components/Awards.jsx';
import Footer from './components/Footer.jsx';
import { projects } from './data/projectsData.js';

const categories = ['All', 'Web Apps', 'Mobile'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="bg-dark min-h-screen overflow-x-hidden">
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
  );
}

export default App;
