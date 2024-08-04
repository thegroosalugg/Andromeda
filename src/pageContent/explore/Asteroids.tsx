import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import asteroid from '@/assets/planets/asteroid.png';
import rand from '@/util/rand';
import css from './Asteroids.module.css';

export default function Asteroids() {
  const { activeFC, activeHandler, width, isLandscape, isMobile } = useContext(ExploreContext);
  const isActive = activeFC === 'ast';
  const numDivs = Math.floor(width * (isMobile ? 0.035 : 0.012));

  return (
    <motion.div
      className={css['asteroids']}
      onClick={() => activeHandler('ast')}
      initial='hidden'
      animate='visible'
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
      whileHover={{
           borderColor: isMobile || isActive ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
           transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      style={{ flexDirection: isLandscape ? 'column' : 'row' }}
    >
      {Array.from({ length: isActive ? 5 : numDivs }).map((_, divIndex) => (
        <motion.div
          key={divIndex}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ staggerChildren: 0.05 }}
          style={{ flexDirection: isLandscape ? 'row' : 'column' }}
        >
          {Array.from({ length: rand(2, 5) * (isActive ? 2 : 1) }).map((_, astIndex) => (
            <motion.img
              key={astIndex}
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
                  x: rand(-10, 10) * (isActive ? 10 : 1),
                  y: rand(-10, 10) * (isActive ? 10 : 1),
                  transition: { duration: 0.5 },
                },
              }}
              style={{ width: (isMobile ? 5 : 10) * (isActive ? 5 : 1) }}
            />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
