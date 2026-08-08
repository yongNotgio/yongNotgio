export const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 100,
    rotateX: -90,
    opacity: 0,
  },
  show: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1.5,
      delay,
    },
  },
});

export const fadeInUp = {
  hidden: {
    y: 150,
    scale: 0.8,
    rotate: -5,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      damping: 10,
      stiffness: 70,
      duration: 1.2,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-150%" : direction === "right" ? "150%" : 0,
    y: direction === "up" ? "150%" : direction === "down" ? "-150%" : 0,
    opacity: 0,
    rotate: direction === "left" ? -15 : direction === "right" ? 15 : 0,
    scale: 0.5,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "anticipate",
      bounce: 0.6,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      ease: "easeOut",
      bounce: 0.6,
    },
  },
});

export const hoverCard = {
  hover: {
    scale: 1.05,
    y: -15,
    rotate: 2,
    boxShadow: "0px 25px 40px -15px rgba(200, 241, 53, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};
