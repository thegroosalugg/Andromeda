import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import useScreen from '@/hooks/useScreen';
import mercury from '@/assets/planets/mercury.png';
import venus from '@/assets/planets/venus.png';
import earth from '@/assets/planets/earth.png';
import mars from '@/assets/planets/mars.png';
import jupiter from '@/assets/planets/jupiter.png';
import saturn from '@/assets/planets/saturn.png';
import uranus from '@/assets/planets/uranus.png';
import neptune from '@/assets/planets/neptune.png';
import css from './Planets.module.css';

// prettier-ignore
const config = (planet: string, width: number, height: number, isActive: string) => {
  const name = planet.match(/(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/)![0] as keyof typeof props;

  const adjust = (base: number) =>
    base * // 1: targets mobiles, 2: landscape mobiles via aspect ratio
    ((width >= 320 && width <= 440) || (width / height > 1.8 && width < 1024) ? 0.5 : 1) *
    (isActive === 'inner' ? 3 : isActive === 'outer' ? 2 : 1);

  const margin = width > height ? 'marginBottom' : 'marginLeft';

  const props = {
    mercury: { width: adjust( 20), [margin]: 20, rotate: 0 },
    venus:   { width: adjust( 30), [margin]: 30, rotate: 0 },
    earth:   { width: adjust( 40), [margin]: 40, rotate: 0 },
    mars:    { width: adjust( 25), [margin]: 55, rotate: 0 },
    jupiter: { width: adjust(100), [margin]: 55, rotate: 0 },
    saturn:  { width: adjust(120), [margin]: 40, rotate: 0 },
    uranus:  { width: adjust( 80), [margin]: 30, rotate: 0 },
    neptune: { width: adjust( 70), [margin]: 20, rotate: 0 },
  };

  return { ...props[name] };
};

export default function Planets({ outer }: { outer?: boolean }) {
  const planets = outer ? [jupiter, saturn, uranus, neptune] : [mercury, venus, earth, mars];
  const { isActive, activeHandler } = useContext(ExploreContext);
  const { width, height } = useScreen();
  console.log(width, height); // logData
  // width <= 440 && outer && isActive !== 'outer' && planets.reverse();
  const activeClass = (isActive === 'inner' && !outer) || (isActive === 'outer' && outer);

  return (
    <motion.section
      className={`${css['planets']} ${activeClass ? css['active'] : ''}`}
      onClick={() => activeHandler(outer ? 'outer' : 'inner')}
      initial='hidden'
      animate='visible'
      exit={{ x: outer ? 500 : -500, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.2, delayChildren: outer ? 1 : 0.5 }}
      style={{
        flexDirection: width > height ?       'row' : 'column',
              padding: width > height ? '2rem 1rem' : '1rem 0',
                  gap: width > height ?    '0.5rem' : '1rem',
      }}
    >
      {planets.map((planet) => (
        <motion.div
          key={planet}
          layout
          transition={{ duration: 1.2 }} // controls layout transition
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: [0, 1],
              scale: 1,
              transition: { type: 'tween', ease: 'linear', duration: 0.5 },
            },
          }}
        >
          <motion.img
            src={planet}
            alt={planet}
            initial={config(planet, width, height, isActive)}
            animate={config(planet, width, height, isActive)}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}
