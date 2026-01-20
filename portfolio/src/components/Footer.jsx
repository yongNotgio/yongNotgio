import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/yongNotgio' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yongcallos' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:gioanthonycallos@gmail.com' },
];

function Footer() {
  const openEmailWithFallback = (mailto) => {
    try { window.location.href = mailto; } catch (err) {}
    const email = mailto.replace('mailto:', '');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    setTimeout(() => window.open(gmailUrl, '_blank'), 700);
  };

  return (
    <footer id="footer" className="border-t border-darkBorder py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Get in <span>Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="card-surface p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
              <FaEnvelope />
            </div>
            <h3 className="font-semibold text-textLight mb-2">Mail & Website</h3>
            <a
              href="mailto:gioanthonycallos@gmail.com"
              onClick={(e) => { e.preventDefault(); openEmailWithFallback('mailto:gioanthonycallos@gmail.com'); }}
              className="text-sm text-textMuted hover:text-accent block break-all"
            >
              gioanthonycallos@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="card-surface p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
              <FaPhone />
            </div>
            <h3 className="font-semibold text-textLight mb-2">Contact</h3>
            <p className="text-sm text-textMuted">+63 900 000 0000</p>
          </div>

          {/* Location */}
          <div className="card-surface p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-semibold text-textLight mb-2">Address</h3>
            <p className="text-sm text-textMuted">Iloilo City, Philippines</p>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mt-12">
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

        {/* Copyright */}
        <div className="text-center text-xs text-textMuted mt-12 pt-6 border-t border-darkBorder">
          <p>© 2025 Gio Anthony Callos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
