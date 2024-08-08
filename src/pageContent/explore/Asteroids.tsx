import { motion, useAnimate } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import asteroid from '@/assets/planets/asteroid.png';
import rand from '@/util/rand';
import css from './Asteroids.module.css';

// prettier-ignore
const animations = Array.from({ length: 50 }, () => ({
       x: rand(-10, 10),
       y: rand(-10, 10),
   width: rand(  4, 10),
  filter: `brightness(${rand(4, 8) * 0.1}) sepia(1) hue-rotate(5deg)`,
  rotate: 360 * (Math.random() < 0.5 ? 1 : -1),
    secs: rand(4, 7),
}));

const rows = Array.from({ length: 10 }, () => rand(2, 5));

export default function Asteroids() {
  const { activeFC, activeHandler, isLandscape, isMobile } = useContext(ExploreContext);
  const [scope, animate] = useAnimate();
  const isActive = activeFC === 'ast';

  const dragY = isLandscape ? 100 : 200;
  const dragX = isLandscape ? 350 * (isMobile ? 1 : 1.8) : 100;

  const handleDragEnd = (index: number) => {
    animate(`#ast-${index}`, { scale: [0.8, 1.2, 0.8, 1.2] }, { type: 'tween', ease: 'linear', duration: 1, });
  };

  return (
    <motion.div
      className={css['asteroids']}
      onClick={() => activeHandler('ast')}
      initial='hidden'
      animate='visible'
      ref={scope}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
      // prettier-ignore
      whileHover={{
           borderColor: isMobile || isActive ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
            transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      // prettier-ignore
      style={{
                  flex: isMobile && !isLandscape && !isActive ? '0.5 1 10%' : '1 1 10%',
         flexDirection: isLandscape ? 'column' : 'row',
        justifyContent:    isActive ? 'center' : 'space-around',
      }}
    >
      {Array.from({ length: isActive ? 5 : 10 }).map((_, colIndex) => (
        <motion.div
          key={colIndex}
          variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
          // prettier-ignore
          style={{
            flexDirection: isLandscape ?  'row' : 'column',
                      gap:    isActive ? '1rem' : '',
          }}
        >
          {Array.from({ length: rows[colIndex] }).map((_, rowIndex) => {
            const astIndex = colIndex * 5 + rowIndex;

            return (
              <motion.img
                id={`ast-${astIndex}`}
                key={astIndex}
                src={asteroid}
                alt='Asteroid'
                layout
                transition={{ duration: 1 }} // for layout transition
                drag={isActive}
                dragConstraints={{
                    left: dragX * -1,
                   right: dragX,
                     top: dragY * -1,
                  bottom: dragY,
                }}
                dragTransition={{
                  bounceStiffness: 100,
                  bounceDamping: 80,
                  timeConstant: 1000,
                }}
                onDragEnd={() => handleDragEnd(astIndex)}
                style={{
                  width: animations[astIndex].width * (isActive ? 5 : 1) * (isMobile ? 0.5 : 1),
                  cursor: isActive ? 'pointer' : '',
                }}
                // prettier-ignore
                animate={{
                   filter: animations[astIndex].filter,
                        x: animations[astIndex].x * (isActive ? 10 : 1),
                        y: animations[astIndex].y * (isActive ? 10 : 1),
                   rotate: animations[astIndex].rotate,
                  transition: {
                    duration: 0.5,
                      rotate: {
                      duration: animations[astIndex].secs,
                          type: 'tween',
                          ease: 'linear',
                        repeat: Infinity,
                    },
                  },
                }}
              />
            );
          })}
        </motion.div>
      ))}
    </motion.div>
  );
}
