import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, hoverCard, textVariant } from '../utils/motion.js';
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedal,
  FaMicrophone,
  FaRobot,
  FaRocket,
  FaTrophy,
  FaAward,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools
} from 'react-icons/fa';

const STATS = [
  { num: '3+', label: 'Years experience' },
  { num: '0', label: 'Featured projects' },
  { num: '7', label: 'Major recognitions' },
  { num: 'BS', label: 'Info Systems' },
];

const PROJECTS = [
  {
    id: 'diasight',
    title: 'DiaSight: AI-Powered DR Detection',
    desc: 'Standalone React and Supabase DR detection app with real-time risk stratification and explainable outputs.',
    chips: ['React.js', 'Supabase', 'TensorFlow', 'Machine Learning'],
    label: 'Web + AI/ML',
    accent: '#1b2fff',
    wide: true,
    icon: '</>',
  },
  {
    id: 'diatrack',
    title: 'DiaTrack: Diabetes Care System',
    desc: 'Hybrid XAI-enabled diabetes care platform with Flutter mobile app and React web portals backed by ensemble diagnostics.',
    chips: ['Flutter', 'React', 'Vite', 'Supabase', 'AI/ML'],
    label: 'Web + Mobile',
    accent: '#ff5c3a',
    wide: false,
    icon: '◈',
  },
  {
    id: 'unblot',
    title: 'Unblot: Poetry Social Platform',
    desc: 'Full-stack social app for poetry posting and sharing with authentication, feed logic, and search features.',
    chips: ['React.js', 'Supabase', 'Real-time'],
    label: 'Web App',
    accent: '#c8f135',
    wide: false,
    icon: '∞',
  },
];

function getProjectAccent(index) {
  const accents = ['#1b2fff', '#ff5c3a', '#c8f135'];
  return accents[index % accents.length];
}

function getProjectLabel(project) {
  if (Array.isArray(project.category) && project.category.length > 0) {
    return project.category.slice(0, 2).join(' + ');
  }
  return 'Project';
}

const SKILL_GROUPS = [
  {
    label: 'Web and Frontend',
    Icon: FaCode,
    iconClass: 'sk-icon-lime',
    items: ['TypeScript', 'React', 'TanStack Start', 'Astro', 'Vite', 'Tailwind CSS', 'JavaScript'],
  },
  {
    label: 'Mobile',
    Icon: FaMobileAlt,
    iconClass: 'sk-icon-coral',
    items: ['Flutter', 'Dart'],
  },
  {
    label: 'Backend and Databases',
    Icon: FaDatabase,
    iconClass: 'sk-icon-cobalt',
    items: ['Node.js', 'PostgreSQL', 'Convex', 'Supabase', 'PHP', 'MySQL', 'Firebase'],
  },
  {
    label: 'AI, ML, and Data Science',
    Icon: FaBrain,
    iconClass: 'sk-icon-lime',
    items: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Jupyter', 'R', 'RStudio'],
  },
  {
    label: 'Tools and Infra',
    Icon: FaTools,
    iconClass: 'sk-icon-gray',
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Kubernetes'],
  },
];

const ACHIEVEMENTS = [
  {
    Icon: FaTrophy,
    title: 'Champion',
    desc: 'DOST National AI Fest 2026, Open Category.',
    badge: 'AUG 2026',
  },
  {
    Icon: FaTrophy,
    title: 'National Champion, Most Disruptive Idea, and Best Business Model',
    desc: 'DICT Philippine Startup Challenge X, Clark, Pampanga.',
    badge: 'DEC 2025',
  },
  {
    Icon: FaMicrophone,
    title: 'Best Research Presentation (Top 5% Paper)',
    desc: '26th International Symposium on Advanced Intelligent Systems, Cheongju, South Korea.',
    badge: 'NOV 2025',
  },
  {
    Icon: FaRocket,
    title: 'Champion and Most Market-Ready Innovation',
    desc: 'WESTnovation Challenge, West Visayas State University System, Iloilo City.',
    badge: 'NOV 2025',
  },
  {
    Icon: FaAward,
    title: 'Champion, Best Pitch, and Most Innovative',
    desc: 'DICT PSC X Regional, Region VI, Iloilo City.',
    badge: 'OCT 2025',
  },
  {
    Icon: FaRobot,
    title: 'Champion and Visionary Innovator',
    desc: 'DICT AI.DEAS for Impact, Region VI, Bacolod City.',
    badge: 'SEP 2025',
  },
  {
    Icon: FaMedal,
    title: '1st Runner-Up',
    desc: 'DOST National AI Fest AI Hackathon.',
    badge: 'AUG 2025',
  },
];

const SOCIAL = [
  { Icon: FaGithub, label: 'github.com/yongNotgio', href: 'https://github.com/yongNotgio' },
  {
    Icon: FaLinkedin,
    label: 'linkedin.com/in/yongcallos',
    href: 'https://www.linkedin.com/in/yongcallos',
  },
  { Icon: FaEnvelope, label: 'gioanthonycallos@gmail.com', href: 'mailto:gioanthonycallos@gmail.com' },
];

function SectionLabel({ children }) {
  return <p className="section-tag">{children}</p>;
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export function StatsBand({ projectCount = 0 }) {
  const computedStats = STATS.map((stat) =>
    stat.label === 'Featured projects' ? { ...stat, num: String(projectCount || 0) } : stat
  );

  return (
    <motion.div 
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="stats-band"
    >
      {computedStats.map((s) => (
        <motion.div variants={textVariant(0)} key={s.label} className="stat-item">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Projects({ projectsData = [] }) {
  const displayProjects = projectsData.length > 0 ? projectsData.slice(0, 9) : PROJECTS;

  return (
    <section id="work" className="section section-alt">
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionLabel>// selected work</SectionLabel>
        <SectionTitle>Things I&apos;ve built</SectionTitle>
      </motion.div>

      <motion.div 
        variants={staggerContainer(0.15, 0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
        className="projects-grid"
      >
        {displayProjects.map((p, i) => (
          <motion.article
            variants={fadeInUp}
            custom={hoverCard.hover}
            style={{ y: 0 }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
            key={p.id || p.githubUrl || p.title}
            className="project-card"
          >
            <div
              className="card-thumb"
              style={{
                background: `linear-gradient(135deg, ${getProjectAccent(i)}18, ${getProjectAccent(i)}38)`,
                color: getProjectAccent(i),
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.3,
                  }}
                  loading="lazy"
                />
              ) : (
                p.icon || '</>'
              )}
              <span className="card-label">{getProjectLabel(p)}</span>
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc || p.description || 'No description available yet.'}</p>
              <div className="chips">
                {(p.chips || p.tags || []).slice(0, 5).map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {p.githubUrl ? (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon-btn"
                    aria-label={`Open ${p.title} on GitHub`}
                    title="View GitHub repository"
                  >
                    <FaGithub aria-hidden="true" />
                  </a>
                ) : null}
                {p.liveUrl && p.liveUrl !== '#' ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-link"
                  >
                    Live Demo <FaArrowRight aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionLabel>// expertise</SectionLabel>
        <SectionTitle>My stack</SectionTitle>
      </motion.div>

      <motion.div 
        variants={staggerContainer(0.1, 0.1)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
        className="skills-grid"
      >
        {SKILL_GROUPS.map((group, gi) => (
          <motion.article 
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
            key={group.label} 
            className="skill-card"
          >
            <div className="skill-card-header">
              <div className={`skill-card-icon ${group.iconClass}`}>
                <group.Icon aria-hidden="true" />
              </div>
              <h3>{group.label}</h3>
            </div>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="wins" className="section section-alt">
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionLabel>// milestones</SectionLabel>
        <SectionTitle>Wins and recognition</SectionTitle>
      </motion.div>

      <motion.div 
        variants={staggerContainer(0.15, 0.1)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
        className="ach-grid"
      >
        {ACHIEVEMENTS.map((a, i) => (
          <motion.article 
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 } }}
            key={a.title} 
            className="ach-card"
          >
            <div className="ach-icon">
              <a.Icon aria-hidden="true" />
            </div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <span className="ach-badge">{a.badge}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
      >
        <SectionLabel>// get in touch</SectionLabel>
        <SectionTitle>Let&apos;s build something</SectionTitle>
      </motion.div>

      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }}
        className="contact-content"
      >
        <p>
          I am a Full-stack Developer with a degree in Information Systems,
          focused on building AI-enabled web and mobile solutions that solve real health and
          social impact problems. I am always open to discussing new projects, creative ideas, 
          or opportunities to be part of your vision.
        </p>
        <div className="social-links">
          {SOCIAL.map((s) => (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span aria-hidden="true">
                <s.Icon />
              </span>
              {s.label}
              <span className="arr" aria-hidden="true">
                <FaArrowRight />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <span>
        <strong>Gio Anthony Callos</strong> © 2026
      </span>
      <span>All rights reserved.</span>
    </footer>
  );
}
