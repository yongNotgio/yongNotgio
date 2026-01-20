import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/yongNotgio' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yongcallos' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:gioanthonycallos@gmail.com' },
];

function Hero() {
  const openEmailWithFallback = (mailto) => {
    try {
      window.location.href = mailto;
    } catch (e) {
      // ignore
    }
    const email = mailto.replace('mailto:', '');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    setTimeout(() => window.open(gmailUrl, '_blank'), 700);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center py-12 sm:py-16 md:py-24">
        {/* Left - Photo with social icons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center md:items-start"
        >
          <div className="glass-panel p-2 mb-6">
            <img
              src="/profile.jpg"
              alt="Gio Anthony Callos"
              className="w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 object-cover object-top rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="flex gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href && item.href.startsWith('mailto:')) {
                    e.preventDefault();
                    openEmailWithFallback(item.href);
                  }
                }}
                target={item.href && item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href && item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={item.label}
                className="social-icon text-lg"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            My Self <span className="text-accent">Gio Anthony Callos</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-textMuted mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="text-accent">—</span> I'm A Full-Stack Developer
          </p>
          <p className="text-sm sm:text-base text-textMuted leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            4th-year Information Systems student passionate about building innovative solutions.
            Specializing in full-stack web development and AI/ML integration with multiple national awards.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/Resume%20(GioAnthonyCallos).pdf"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a href="#about" className="btn-secondary">
              More Info
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
