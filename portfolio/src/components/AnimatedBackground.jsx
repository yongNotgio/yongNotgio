import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // No-op callback keeps API parity while avoiding console noise.
  }, []);

  return (
    <Particles
      id="portfolio-particles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="pointer-events-none"
      options={{
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
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
            stroke: {
              width: 0,
              color: '#98ac95',
            },
          },
          opacity: {
            value: 0.66,
          },
          size: {
            value: { min: 0.6, max: 6 },
          },
          links: {
            enable: true,
            distance: 666,
            color: '#98ac95',
            opacity: 0.6,
            width: 0.6,
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
        pauseOnOutsideViewport: false,
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}

export default AnimatedBackground;
