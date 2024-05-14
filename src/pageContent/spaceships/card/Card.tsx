import { motion } from 'framer-motion';
import css from './Card.module.css';

export default function Card({ reverse, image, text }: { reverse?: boolean; image: string, text: string }) {
  const x = reverse ? '-100%' : '100%';
  const content = <p>{text}</p>;
  const classes = `${css.card} ${css[reverse ? 'right' : 'left']}`;

  return (
    <motion.div
      className={classes}
      variants={{ hidden: { x, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
      transition={{ duration: 1, type: 'tween' }}
    >
      {reverse && content}
      <img src={image} alt='rocket' />
      {!reverse && content}
    </motion.div>
  );
}
