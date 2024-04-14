import { motion } from 'framer-motion';
import ufo from '../../assets/banner/UFO.png';
import beam from '../../assets/banner/beam.png';
import css from './UFO.module.css';

export default function UFO() {
  return (
    <div className={css.ufo}>
      <motion.img
        src={ufo}
        alt='ufo'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: [0.2, 0.4, 0.6, 0.8, 1],
          y: 0,
          rotateY: 4320,
        }}
        transition={{ type: 'easeIn', duration: 6 }}
      />
      <motion.img
        src={beam}
        alt='beam'
        initial={{ opacity: 0, y: -105, scale: 0.8 }}
        whileInView={{
          opacity: [0, 1, 0, 1, 1, 1, 0, 1],
          y: -105,
          scale: 0.8,
        }}
        transition={{ type: 'easeIn', delay: 6, duration: 5, repeat: Infinity }}
      />
    </div>
  );
}
