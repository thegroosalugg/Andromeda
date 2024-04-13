import { motion } from 'framer-motion';
import ufo from '../../assets/banner/UFO.png';
import css from './UFO.module.css';

export default function UFO() {
  return (
    <motion.img
      src={ufo}
      alt='ufo'
      className={css.ufo}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{
        opacity: [0.2, 0.4, 0.6, 0.8, 1],
        y: 0,
        rotateY: 4320,
      }}
      transition={{ type: 'easeIn', duration: 5 }}
    />
  );
}
