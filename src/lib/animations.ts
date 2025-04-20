import { MotionProps } from "framer-motion";

export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.22, 1, 0.36, 1],
    delay 
  }
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideInFromLeft = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.22, 1, 0.36, 1],
    delay 
  }
});

export const slideInFromRight = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.22, 1, 0.36, 1],
    delay 
  }
});

export const zoomIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.5, 
    ease: [0.22, 1, 0.36, 1],
    delay 
  }
});

export const cardHover = {
  whileHover: { 
    y: -5, 
    boxShadow: "0 20px 25px -5px rgba(10, 12, 27, 0.5), 0 8px 10px -6px rgba(10, 12, 27, 0.2)",
    transition: { duration: 0.3 }
  }
};
