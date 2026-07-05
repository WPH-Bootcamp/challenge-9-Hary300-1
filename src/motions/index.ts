import { type Variants } from 'motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const pressable = {
  whileHover: {
    scale: 1.1,
    transition: {
      duration: 0.1,
    },
  },
  whileTap: {
    scale: 0.95,
  },
  transition: {
    duration: 0.5,
  },
};
