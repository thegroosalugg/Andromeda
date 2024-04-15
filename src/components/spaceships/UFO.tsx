import { motion } from 'framer-motion';
import ufo from '../../assets/banner/UFO.png';
import beam from '../../assets/banner/beam.png';
import css from './UFO.module.css';

export default function UFO() {
  return (
    <motion.div
      className={css.ufo}
      initial={{ x: 0 }}
      whileInView={{
        x: [0, '-20%', '20%', 0],
        scale: [1, 1, 1, 1.5, 1, 0.8, 1],
      }}
      transition={{
        type: 'easeIn',
        delay: 10,
        duration: 15,
        repeat: Infinity,
      }}
    >
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
        viewport={{ once: true }}
      />
      <motion.img
        src={beam}
        alt='beam'
        initial={{ opacity: 0, y: -105, scale: 0.8, scaleX: 0.7 }}
        whileInView={{
          opacity: [0, 1, 0, 1, 1, 1, 0, 1],
          y: -105,
          scale: 0.8,
          scaleX: 0.7,
        }}
        transition={{
          type: 'easeIn',
          delay: 6,
          duration: 5,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
