import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function HeroParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Keep callback for compatibility.
  }, []);

  return (
    <div className="hero-particles-layer" aria-hidden="true">
      <Particles
        id="hero-particles"
        className="hero-particles-canvas"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          background: {
            color: 'transparent',
          },
          particles: {
            number: {
              value: 66,
              density: {
                enable: true,
                area: 6666,
              },
            },
            color: {
              value: '#98ac95',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.75,
              animation: {
                enable: false,
                speed: 0.6,
              },
            },
            size: {
              value: { min: 0.6, max: 6 },
              random: true,
              animation: {
                enable: false,
                speed: 66,
              },
            },
            links: {
              enable: true,
              distance: 666,
              color: '#98ac95',
              opacity: 0.72,
              width: 0.8,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'top-left',
              random: false,
              straight: false,
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              onClick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 666,
                links: {
                  opacity: 0.6,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default HeroParticleBackground;
