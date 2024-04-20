import { motion } from 'framer-motion';
import Card from './Card';
import css from './Cards.module.css';

export default function Cards() {
  return (
    <motion.div
      className={css.cards}
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1}}
    >
      <Card />
      <Card />
      <Card />
    </motion.div>
  );
}
