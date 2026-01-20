import { motion } from 'framer-motion';

const details = [
  { label: 'Full Name', value: 'Gio Anthony Callos' },
  { label: 'Program', value: 'BS Information Systems' },
  { label: 'Year', value: '4th Year' },
  { label: 'Email', value: 'gioanthonycallos@gmail.com' },
];

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Flutter', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'TensorFlow / ML', level: 70 },
  { name: 'Supabase / Firebase', level: 85 },
];

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <h3 className="text-accent uppercase text-sm font-semibold tracking-wider mb-4">
              CREATIVITY MEETS INNOVATION
            </h3>
            <p className="text-textMuted leading-relaxed mb-8">
              I am a passionate full-stack developer with <strong className="text-textLight">3+ years</strong> of experience building web and mobile applications. 
              I specialize in creating innovative solutions using modern technologies, with a focus on AI/ML integration and user-centered design. 
              Multiple national award winner committed to continuous learning and excellence.
            </p>

            <dl className="details-list grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((item) => (
                <div key={item.label} className="space-y-1">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5 min-w-0"
          >
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-textLight font-medium">{skill.name}</span>
                  <span className="text-textMuted">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
