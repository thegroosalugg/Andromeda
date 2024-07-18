import { motion } from 'framer-motion';
import useScreen from '@/hooks/useScreen';
import asteroid from '@/assets/planets/asteroid.png';
import css from './Asteroids.module.css';
import rand from '@/util/rand';

export default function Asteroids() {
  const { width } = useScreen();
  const flexRow = width > 440;
  const multiplier = flexRow ? 0.015 : 0.04;

  const numRows = Math.ceil(width * multiplier);

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      transition={{ staggerChildren: 0.05 }}
      className={css['asteroids']}
    >
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 }}}
          transition={{ staggerChildren: 0.05 }}
        >
          {Array.from({ length: rand(2, 7) }).map((_, asteroidIndex) => (
            <motion.img
              key={asteroidIndex}
              src={asteroid}
              alt='Asteroid'
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: 0, x: 0, y: 0 },
                visible: {
                  opacity: 1,
                  filter: `brightness(${rand(4, 8) * 0.1}) sepia(1) hue-rotate(5deg)`,
                  scale: rand(4, 10) * 0.1,
                  rotate: rand(-360, 360),
                  x: rand(-10, 10),
                  y: rand(-10, 10),
                },
              }}
            />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}