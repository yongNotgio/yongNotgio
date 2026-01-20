const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Supabase', 'Firebase', 'MySQL', 'PHP'],
  },
  {
    title: 'Mobile',
    items: ['Flutter'],
  },
  {
    title: 'AI/ML',
    items: ['TensorFlow', 'Machine Learning'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Figma', 'VS Code'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-container py-20 md:py-24">
      <div className="space-y-10">
        <div>
          <p className="text-sm font-semibold text-primary/80">Skills</p>
          <h2 className="section-title">Tech I work with</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="card-surface p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="badge bg-primary/5 text-primary border border-primary/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
