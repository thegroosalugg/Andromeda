import { motion } from 'framer-motion';
import Card from './Card';
import css from './Cards.module.css';

export default function Cards() {
  const CardPair = () => (
    <motion.div
      className={css.pair}
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.3 }}
      viewport={{ once: true }}
    >
      <Card />
      <Card reverse />
    </motion.div>
  );

  return (
    <motion.div
      className={css.cards}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CardPair />
      <CardPair />
    </motion.div>
  );
}
