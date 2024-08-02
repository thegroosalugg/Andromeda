import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import useScreen from '@/hooks/useScreen';
import asteroid from '@/assets/planets/asteroid.png';
import rand from '@/util/rand';
import css from './Asteroids.module.css';

export default function Asteroids() {
  const { isActive, activeHandler } = useContext(ExploreContext);
  const { width, height } = useScreen();
  const dekstop = width > 440;
  const landscape = width > height;
  const multiplier = dekstop ? 0.012 : 0.04;
  const numRows = Math.ceil(width * multiplier);

  return (
    <motion.div
      className={css['asteroids']}
      onClick={() => activeHandler('ast')}
      initial='hidden'
      animate='visible'
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
      whileHover={{
           borderColor: !dekstop || isActive === 'ast' ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
           transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      style={{ flexDirection: landscape ? 'column' : 'row' }}
    >
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ staggerChildren: 0.05 }}
          style={{ flexDirection: landscape ? 'row' : 'column' }}
        >
          {Array.from({ length: rand(2, 7) }).map((_, asteroidIndex) => (
            <motion.img
              key={asteroidIndex}
              src={asteroid}
              alt='Asteroid'
              layout
              transition={{ duration: 1.2 }} // controls layout transition
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: 0, x: 0, y: 0 },
                visible: {
                  opacity: 1,
                  filter: `brightness(${rand(4, 8) * 0.1}) sepia(1) hue-rotate(5deg)`,
                  scale: rand(4, 10) * 0.1,
                  rotate: rand(-360, 360),
                  x: rand(-10, 10),
                  y: rand(-10, 10),
                  transition: { duration: 0.5 },
                },
              }}
            />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
