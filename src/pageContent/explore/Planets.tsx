import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import mercury from '@/assets/planets/mercury.png';
import venus from '@/assets/planets/venus.png';
import earth from '@/assets/planets/earth.png';
import mars from '@/assets/planets/mars.png';
import jupiter from '@/assets/planets/jupiter.png';
import saturn from '@/assets/planets/saturn.png';
import uranus from '@/assets/planets/uranus.png';
import neptune from '@/assets/planets/neptune.png';
import css from './Planets.module.css';

type Planet = keyof typeof props;

const nameOf = (planet: string) =>
  planet.match(/(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/)![0] as Planet;

// prettier-ignore
const props = {
  mercury: { width:  20, align: 30, rotate: 65 },
  venus:   { width:  30, align: 40, rotate: 45 },
  earth:   { width:  40, align: 50, rotate: 45 },
  mars:    { width:  25, align: 65, rotate: 45 },
  jupiter: { width: 100, align: 65, rotate: 55 },
  saturn:  { width: 120, align: 50, rotate: 55 },
  uranus:  { width:  70, align: 40, rotate: 45 },
  neptune: { width:  60, align: 30, rotate: 40 },
};

export default function Planets({ outer }: { outer?: boolean }) {
  const planets = outer ? [jupiter, saturn, uranus, neptune] : [mercury, venus, earth, mars];
  const { activeFC, activeHandler, isLandscape, isMobile } = useContext(ExploreContext);
  const activeSet = (activeFC === 'inner' && !outer) || (activeFC === 'outer' && outer);

  // prettier-ignore
  const config = (key: Planet) => {
    const { width, align, rotate } = props[key];
    const   size = width * (isMobile ? 0.5 : 1) * (activeSet ? (outer ? 2 : 4) : 1);

    return {
             width: size,
        marginLeft:  isLandscape || activeSet ? 0 : align,
      marginBottom: !isLandscape || activeSet ? 0 : align,
            rotate:  isLandscape ? 0 : rotate,
    };
  };

  return (
    <motion.section
      className={css['planets']}
      onClick={() => activeHandler(outer ? 'outer' : 'inner')}
      initial='hidden'
      animate='visible'
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
      transition={{ staggerChildren: 0.2, delayChildren: outer ? 1 : 0.5 }}
      // prettier-ignore
      whileHover={{
           borderColor: isMobile || activeSet ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
            transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      // prettier-ignore
      style={{
                  flex: `1 1 ${outer ? 50 : 30}%`,
         flexDirection:  isLandscape ? 'row' : 'column',
        justifyContent:    activeSet ? 'space-evenly' : 'space-between',
               padding: activeSet && !isMobile ? '2rem' : outer ? (isLandscape ? '0 1rem 0 0' : '0 0 1rem') : 0,
      }}
    >
      {planets.map((planet, i) => {
        // prettier-ignore
        const    name = nameOf(planet);
        const animate = config(name);

        return (
          <motion.div
            key={planet}
            layout
            transition={{ duration: 1.2 }} // controls layout transition
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: 'tween', ease: 'linear', duration: 0.5 },
              },
            }}
            style={{ padding: !isMobile ? '1rem' : '' }} // will cause animation jitter if on mobile, same with Gap or Margin
          >
            <motion.img
              src={planet}
              alt={name}
              initial={animate}
              animate={animate}
              transition={{ duration: 1 }}
            />
            <AnimatePresence>
              {activeSet && (
                <motion.p
                  style={{ fontSize: isMobile ? '0.5rem' : '1rem' }}
                  initial={{ opacity: 0, x: animate.width - 50 }}
                  animate={{
                    opacity: 1,
                    x: animate.width + 5,
                    transition: { delay: 1 + i * 0.2, duration: 1, ease: 'easeInOut' },
                  }}
                  exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                >
                  {name}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
