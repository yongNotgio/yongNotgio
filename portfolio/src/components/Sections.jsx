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
} from 'react-icons/fa';

const STATS = [
  { num: '3+', label: 'Years experience' },
  { num: '0', label: 'Featured projects' },
  { num: '6', label: 'Major recognitions' },
  { num: '4th', label: 'Year standing' },
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
    className: 'sk-lime',
    items: ['JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'HTML5', 'JSON'],
  },
  {
    label: 'Mobile',
    className: 'sk-coral',
    items: ['Flutter', 'Dart'],
  },
  {
    label: 'Backend and Services',
    className: 'sk-cobalt',
    items: ['PHP', 'Supabase', 'Firebase', 'Convex'],
  },
  {
    label: 'Databases',
    className: 'sk-coral',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    label: 'AI, ML, and Data Science',
    className: 'sk-lime',
    items: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Jupyter', 'R', 'RStudio'],
  },
  {
    label: 'Tools and Infra',
    className: 'sk-gray',
    items: ['Git', 'VS Code', 'Kubernetes', 'C++'],
  },
];

const ACHIEVEMENTS = [
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
    <div className="stats-band">
      {computedStats.map((s) => (
        <div key={s.label} className="stat-item">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Projects({ projectsData = [] }) {
  const displayProjects = projectsData.length > 0 ? projectsData.slice(0, 9) : PROJECTS;

  return (
    <section id="work" className="section section-alt">
      <div className="reveal">
        <SectionLabel>// selected work</SectionLabel>
        <SectionTitle>Things I&apos;ve built</SectionTitle>
      </div>

      <div className="projects-grid">
        {displayProjects.map((p, i) => (
          <article
            key={p.id || p.githubUrl || p.title}
            className={`project-card reveal d${(i % 4) + 1}`}
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
          </article>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const bars = [
    { label: 'Frontend', pct: 95, color: '#c8f135' },
    { label: 'Backend', pct: 88, color: '#ff5c3a' },
    { label: 'Mobile', pct: 90, color: '#6b7fff' },
    { label: 'DevOps', pct: 74, color: 'var(--fg-faint)' },
    { label: 'UI / UX', pct: 80, color: '#c8f135' },
    { label: 'Architecture', pct: 85, color: '#ff5c3a' },
  ];

  return (
    <section id="skills" className="section">
      <div className="reveal">
        <SectionLabel>// expertise</SectionLabel>
        <SectionTitle>My stack</SectionTitle>
      </div>

      <div className="skills-layout">
        <div>
          {SKILL_GROUPS.map((group, gi) => (
            <div key={group.label} className={`skill-group reveal d${(gi % 4) + 1}`}>
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill} className={`skill-tag ${group.className}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal d3">
          {bars.map((bar) => (
            <div key={bar.label} className="bar-row">
              <div className="bar-meta">
                <span className="bar-label">{bar.label}</span>
                <span className="bar-pct">{bar.pct}%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="wins" className="section section-alt">
      <div className="reveal">
        <SectionLabel>// milestones</SectionLabel>
        <SectionTitle>Wins and recognition</SectionTitle>
      </div>

      <div className="ach-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <article key={a.title} className={`ach-card reveal d${(i % 3) + 1}`}>
            <div className="ach-icon">
              <a.Icon aria-hidden="true" />
            </div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <span className="ach-badge">{a.badge}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="reveal">
        <SectionLabel>// get in touch</SectionLabel>
        <SectionTitle>Let&apos;s build something</SectionTitle>
      </div>

      <div className="contact-grid">
        <div className="reveal">
          <p>
            I am a BS Information Systems student majoring in Business Applications Development,
            focused on building AI-enabled web and mobile solutions that solve real health and
            social impact problems.
          </p>
          <div className="social-links">
            {SOCIAL.map((s) => (
              <a
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
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal d2" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Gio Anthony Callos" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="gioanthonycallos@gmail.com" />
          </div>
          <div className="field">
            <label htmlFor="details">Project details</label>
            <textarea
              id="details"
              rows={5}
              placeholder="Tell me about your idea, timeline, and preferred tech stack..."
            />
          </div>
          <button type="submit" className="submit-btn">
            Send message <FaArrowRight aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <span>
        <strong>Gio Anthony Callos</strong> © 2025
      </span>
      <span>All rights reserved.</span>
    </footer>
  );
}
