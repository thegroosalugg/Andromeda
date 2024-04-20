import { motion } from 'framer-motion';
import css from './Card.module.css';

export default function Card() {
  return (
    <motion.div
      className={css.card}
      initial={{ x: '-100%' }}
      whileInView={{ x: 0, rotate: 1080 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <p>TEXT</p>
    </motion.div>
  );
}
