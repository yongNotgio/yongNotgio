import { useState, useEffect } from 'react';
import { HiHome, HiUser, HiFolder, HiStar, HiMail, HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { icon: <HiHome />, label: 'Home', href: 'hero' },
  { icon: <HiUser />, label: 'About', href: 'about' },
  { icon: <HiFolder />, label: 'Projects', href: 'projects' },
  { icon: <HiStar />, label: 'Awards', href: 'awards' },
  { icon: <HiMail />, label: 'Contact', href: 'footer' },
];

function Navbar() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(id);
    setMobileOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const element = document.getElementById(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      links.forEach((link) => {
        const element = document.getElementById(link.href);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Desktop sidebar - fixed right */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 bg-darkCard/80 backdrop-blur-xl border border-darkBorder rounded-2xl p-2">
        {links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className={`sidebar-icon text-xl ${active === link.href ? 'active' : ''}`}
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </button>
        ))}
      </nav>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-darkBorder">
        <div className="flex items-center justify-between px-5 py-4">
          <button onClick={() => handleNav('hero')} className="text-lg font-semibold text-white">
            Gio Callos
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl text-textMuted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {mobileOpen && (
          <div className="bg-darkCard border-t border-darkBorder">
            <div className="flex flex-col py-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center gap-3 px-5 py-3 text-left transition ${active === link.href ? 'text-accent bg-accent/10' : 'text-textMuted hover:text-textLight'}`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
