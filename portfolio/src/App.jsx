import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Awards from './components/Awards.jsx';
import Footer from './components/Footer.jsx';
import { projects as fallbackProjects } from './data/projectsData.auto.js';

const githubUsername = 'yongNotgio';
const githubReposApi = `https://api.github.com/users/${githubUsername}/repos?per_page=100&type=owner`;

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

function toTitle(str = '') {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, (s) => s.toUpperCase());
}

function guessCategory(name, desc, language) {
  const text = `${name} ${desc || ''}`.toLowerCase();
  const normalizedLanguage = (language || '').toLowerCase();

  const mobileLanguages = new Set(['dart', 'kotlin', 'swift', 'objective-c']);
  const webLanguages = new Set([
    'javascript',
    'typescript',
    'html',
    'css',
    'php',
    'vue',
    'svelte',
    'tsx',
    'jsx',
  ]);

  let platformCategory = 'Web App';
  if (mobileLanguages.has(normalizedLanguage)) {
    platformCategory = 'Mobile';
  } else if (webLanguages.has(normalizedLanguage)) {
    platformCategory = 'Web App';
  } else if (/(flutter|android|ios|mobile)/.test(text)) {
    platformCategory = 'Mobile';
  }

  const categories = [platformCategory];
  if (/(tensorflow|ml|machine learning|ai\b|pytorch|model|keras|opencv|xai)/.test(text)) {
    categories.push('AI/ML');
  }

  return categories;
}

function mapRepoToProject(repo, index) {
  return {
    id: index + 1,
    title: toTitle(repo.name || ''),
    category: guessCategory(repo.name || '', repo.description || '', repo.language || ''),
    tags: [repo.language || 'JavaScript'],
    description: repo.description || '',
    awards: [],
    liveUrl: repo.homepage || '#',
    githubUrl: repo.html_url,
    image: `https://opengraph.githubassets.com/${repo.id || 1}/${repo.owner?.login || githubUsername}/${repo.name}`,
    githubAvatar: repo.owner?.avatar_url || '',
  };
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [runtimeProjects, setRuntimeProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubProjects() {
      try {
        const response = await fetch(githubReposApi, {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();
        const projects = repos
          .filter((repo) => !repo.archived)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((repo, index) => mapRepoToProject(repo, index));

        if (isMounted) {
          setRuntimeProjects(projects);
        }
      } catch {
        // Keep fallback data when the API is unavailable or rate-limited.
      }
    }

    fetchGithubProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const sourceProjects = runtimeProjects.length > 0 ? runtimeProjects : fallbackProjects;

  const pinnedProjects = useMemo(
    () => sourceProjects.filter((project) => pinnedRepoNames.has(extractRepoName(project.githubUrl))),
    [sourceProjects]
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
