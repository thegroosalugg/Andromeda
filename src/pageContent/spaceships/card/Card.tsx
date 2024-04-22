import { motion } from 'framer-motion';
import css from './Card.module.css';

export default function Card({ reverse, image }: { reverse?: boolean; image: string }) {
  const x = reverse ? '-100%' : '100%';
  const text = <p>{"I'm waiting for a bus. ".repeat(20)}</p>;
  const classes = `${css.card} ${css[reverse ? 'right' : 'left']}`;

  return (
    <motion.div
      className={classes}
      variants={{ hidden: { x, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
      transition={{ duration: 1, type: 'tween' }}
    >
      {reverse && text}
      <img src={image} alt='rocket' />
      {!reverse && text}
    </motion.div>
  );
}
