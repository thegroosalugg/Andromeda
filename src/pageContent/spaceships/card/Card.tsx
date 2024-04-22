import { motion } from 'framer-motion';
import css from './Card.module.css';

export default function Card({ reverse, image }: { reverse?: boolean; image: string }) {
  const x = reverse ? '-100%' : '100%';

  return (
    <motion.div
      className={css.card}
      variants={{ hidden: { x, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
      transition={{ duration: 1, type: 'tween' }}
    >
      <p>{"I'm waiting for a bus. ".repeat(20)}</p>
      <img src={image} alt='rocket' />
    </motion.div>
  );
}
