import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Image with overlay badges */}
      <div className="project-card-image mb-4">
        <img
          src={project.image || '/placeholder-project.jpg'}
          alt={project.title}
          className="project-image"
        />
        <div className="project-card-overlay">
          {project.category.slice(0, 2).map((cat) => (
            <span key={cat} className="badge">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-textLight group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      {project.description && (
        <p className="text-sm text-textMuted mt-2 leading-relaxed">
          {project.description}
        </p>
      )}

      {/* Live demo link if available */}
      {project.liveUrl && project.liveUrl !== '#' && (
        <a
          href={project.liveUrl}
          className="inline-block mt-3 text-sm text-accent hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          View Live →
        </a>
      )}
    </motion.div>
  );
}

function Projects({ categories, activeCategory, onCategoryChange, projects }) {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">
            My <span>Portfolio</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-textMuted py-12">No projects found for this category.</div>
        )}
      </div>
    </section>
  );
}

export default Projects;
