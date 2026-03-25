import HeroParticleBackground from './HeroParticleBackground.jsx';

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroParticleBackground />

      <div className="reveal">
        <div className="avail-tag">
          <span className="avail-dot" />
          Available for freelance and full-time
        </div>

        <h1>
          Full-stack
          <br />
          <span className="stroke">+ Mobile</span>
          <br />
          <span className="lime">Developer</span>
        </h1>

        <p className="hero-sub">
          I build fast, scalable web and mobile products, from pixel-perfect React UIs to
          robust Node and Python backends and cross-platform Flutter apps.
        </p>

        <div className="hero-btns">
          <a href="#work" className="btn-primary">
            View my work ↓
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s talk
          </a>
        </div>
      </div>

      <div className="code-block reveal d2">
        <div className="code-dots">
          <span style={{ background: '#FF5F57' }} />
          <span style={{ background: '#FEBC2E' }} />
          <span style={{ background: '#28C840' }} />
        </div>
        <div className="c-muted">
          <span className="c-kw">const</span> <span className="c-fn">developer</span> = {'{'}
          <br />
          &nbsp;&nbsp;name: <span className="c-str">&quot;Gio Anthony Callos&quot;</span>,
          <br />
          &nbsp;&nbsp;role: <span className="c-str">&quot;Fullstack + Mobile&quot;</span>,
          <br />
          &nbsp;&nbsp;stack: [
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&quot;React&quot;</span>,{' '}
          <span className="c-str">&quot;Node.js&quot;</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&quot;Flutter&quot;</span>,{' '}
          <span className="c-str">&quot;React Native&quot;</span>,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&quot;PostgreSQL&quot;</span>,{' '}
          <span className="c-str">&quot;Docker&quot;</span>
          <br />
          &nbsp;&nbsp;],
          <br />
          &nbsp;&nbsp;available: <span className="lime">true</span>{' '}
          <span className="c-cm">// ready to build</span>
          <br />
          {'}'};
        </div>
      </div>
    </section>
  );
}

export default Hero;
