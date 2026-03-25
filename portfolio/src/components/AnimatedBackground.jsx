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
        background: {
          color: 'transparent',
        },
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              area: 1400,
            },
          },
          color: {
            value: '#d8e8ff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#d8e8ff',
            },
          },
          opacity: {
            value: { min: 0.25, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.25,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 0.8, max: 3.2 },
          },
          links: {
            enable: true,
            distance: 170,
            color: '#9bb8e8',
            opacity: 0.32,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.35,
            direction: 'none',
            random: true,
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
              distance: 220,
              links: {
                opacity: 0.55,
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
