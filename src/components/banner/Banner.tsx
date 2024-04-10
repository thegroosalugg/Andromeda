import { motion } from 'framer-motion';
import css from './Banner.module.css';

const Banner: React.FC = () => {
  return (
    <motion.div
      className={css.banner}
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
      transition={{ type: 'easeIn', duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ y: '-100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'easeIn', duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        CHECK OUT THE FLEET
      </motion.span>
    </motion.div>
  );
};

export default Banner;
