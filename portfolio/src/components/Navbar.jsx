import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from './ThemeProvider.jsx';

function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">
        gio<span>.</span>dev
      </a>

      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#wins">Wins</a>
        <a href="#contact">Contact</a>
        <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <>
              <HiSun aria-hidden="true" style={{ marginRight: '0.35rem', verticalAlign: 'text-bottom' }} />
              light
            </>
          ) : (
            <>
              <HiMoon aria-hidden="true" style={{ marginRight: '0.35rem', verticalAlign: 'text-bottom' }} />
              dark
            </>
          )}
        </button>
        <a
          href="/Resume%20(GioAnthonyCallos).pdf"
          className="nav-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
