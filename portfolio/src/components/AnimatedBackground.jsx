import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { engine, createTimeline, utils } from 'animejs';

function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    if (width === 0 || height === 0) return;

    // Prevents Anime.js from using its own loop
    engine.useDefaultMainLoop = false;

    // Three.js setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 20);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const color = 0x00d9ff; // Site accent color
    const material = new THREE.MeshBasicMaterial({ 
      color, 
      wireframe: true,
      opacity: 0.6,
      transparent: true
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    
    container.appendChild(renderer.domElement);
    camera.position.z = 5;

    function createAnimatedCube() {
      const cube = new THREE.Mesh(geometry, material);
      const x = utils.random(-10, 10, 2);
      const y = utils.random(-5, 5, 2);
      const z = [-16, 4]; // Visible range - animate from -8 to 4
      const r = () => utils.random(-Math.PI * 2, Math.PI * 2, 3);
      const duration = 8000; // 3x slower than original (was 4000)
      createTimeline({
        delay: utils.random(0, duration),
        defaults: { loop: true, duration, ease: 'inSine' },
      })
      .add(cube.position, { x, y, z }, 0)
      .add(cube.rotation, { x: r, y: r, z: r }, 0)
      .init();
      scene.add(cube);
    }

    for (let i = 0; i < 40; i++) {
      createAnimatedCube();
    }

    function render() {
      engine.update(); // Manually update Anime.js engine
      renderer.render(scene, camera); // Render Three.js scene
    }

    // Calls the builtin Three.js animation loop
    renderer.setAnimationLoop(render);

    // Handle window resize
    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      engine.useDefaultMainLoop = true;
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        zIndex: 1,
        width: '100%',
        height: '100%'
      }}
    />
  );
}

export default AnimatedBackground;
