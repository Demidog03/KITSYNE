export const fadeScaleIn = (duration = 1, delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration,
    delay,
    ease: [0.42, 0, 0.58, 1],
  },
});

export const fadeSlideRight = (duration = 1, delay = 0) => ({
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    y: [0, 6, 0],
  },
  transition: {
    opacity: { duration, delay },
    x: { duration, delay },
    y: {
      duration: 4,
      delay: 1.2,
      repeat: Infinity,
      easing: [0.42, 0, 0.58, 1],
    },
  },
});

export const fadeSlideLeft = (duration = 1, delay = 0) => ({
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    y: [0, 6, 0],
  },
  transition: {
    opacity: { duration, delay },
    x: { duration, delay },
    y: {
      duration: 4,
      delay,
      repeat: Infinity,
      easing: [0.42, 0, 0.58, 1],
    },
  },
});

export const delayedDialogFade = (duration = 1, delay = 0) => ({
  initial: { opacity: 0, x: 100, y: -40 },
  animate: { opacity: 1, x: 0, y: -40 },
  transition: {
    opacity: { duration: duration + 0.4, delay },
    x: { duration, delay },
  },
});
