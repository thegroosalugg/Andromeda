import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import asteroid from '@/assets/planets/asteroid.png';
import rand from '@/util/rand';
import css from './Asteroids.module.css';

// prettier-ignore
const animations = Array.from({ length: 100 }, () => ({
       x: rand(-10, 10),
       y: rand(-10, 10),
  rotate: rand(-350, 350),
   scale: rand(4, 10) * 0.1,
  filter: `brightness(${rand(4, 8) * 0.1}) sepia(1) hue-rotate(5deg)`,
}));
console.log(animations);

export default function Asteroids() {
  const { activeFC, activeHandler, isLandscape, isMobile } = useContext(ExploreContext);
  const isActive = activeFC === 'ast';

  console.log('ASTEROIDS' + Math.random().toFixed(3));

  return (
    <motion.div
      className={css['asteroids']}
      onClick={() => activeHandler('ast')}
      layout
      initial='hidden'
      animate='visible'
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
      // prettier-ignore
      whileHover={{
           borderColor: isMobile || isActive ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
            transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      // prettier-ignore
      style={{
         flexDirection: isLandscape ? 'column' : 'row',
        justifyContent:    isActive ? 'center' : 'space-around',
      }}
    >
      {Array.from({ length: isActive ? 4 : 10 }).map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          layout
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ staggerChildren: 0.05 }}
          style={{ flexDirection: isLandscape ? 'row' : 'column' }}
        >
          {Array.from({ length: rand(2, 5) * (isActive ? 2 : 1) }).map((_, colIndex) => {
            const astIndex = rowIndex * 10 + colIndex;

            return (
              <motion.img
                key={astIndex}
                src={asteroid}
                alt='Asteroid'
                layout
                // prettier-ignore
                variants={{
                 hidden: { opacity: 0, scale: 0, rotate: 0, x: 0, y: 0 },
                visible: {
                  opacity: 1,
                   filter: animations[astIndex].filter,
                    scale: animations[astIndex].scale,
                   rotate: isActive
                         ? 360 * (Math.random() < 0.5 ? 1 : -1)
                         : animations[astIndex].rotate,
                        x: animations[astIndex].x * (isActive ? 10 : 1),
                        y: animations[astIndex].y * (isActive ? 10 : 1),
                  transition: {
                    duration: 0.5,
                      rotate: {
                      duration: rand(5, 7),
                          type: 'tween',
                          ease: 'linear',
                        repeat: isActive ? Infinity : 0,
                    },
                  },
                },
              }}
                style={{ width: (isMobile ? 5 : 10) * (isActive ? 5 : 1) }}
              />
            );
          })}
        </motion.div>
      ))}
    </motion.div>
  );
}
