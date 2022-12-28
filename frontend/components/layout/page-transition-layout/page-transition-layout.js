import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 }
};

function TabTransition({ children }) {
  return (
    <motion.div
      className='transition-content'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'linear' }}>
      {children}
    </motion.div>
  );
}

export default TabTransition;
