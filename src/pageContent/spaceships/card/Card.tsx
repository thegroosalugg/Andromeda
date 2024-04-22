import { motion } from 'framer-motion';
import css from './Card.module.css';

export default function Card({ reverse }: { reverse?: boolean }) {
  const x = reverse ? '-100%' : '100%';

  return (
    <motion.div
      className={css.card}
      variants={{ hidden: { x, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
      transition={{ duration: 1, type: 'tween' }}
    >
    </motion.div>
  );
}
