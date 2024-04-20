import { motion } from 'framer-motion';
import Card from './Card';
import css from './Cards.module.css';

export default function Cards() {
  return (
    <motion.div
      className={css.cards}
      variants={{ hidden: { opacity: 0}, visible: {opacity: 1}}}
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 1, staggerChildren: 0.3}}
      viewport={{ once: true }}
    >
      <Card />
      <Card reverse />
      <Card />
    </motion.div>
  );
}
