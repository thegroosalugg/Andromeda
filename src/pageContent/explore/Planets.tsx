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

const nameOf = (image: string) =>
  image.match(/(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/)![0];

// prettier-ignore
const config = {
  mercury: { width:  20, x: 0, y: -10, rotate: 0 },
  venus:   { width:  30, x: 0, y: -20, rotate: 0 },
  earth:   { width:  40, x: 0, y: -30, rotate: 0 },
  mars:    { width:  25, x: 0, y: -35, rotate: 0 },
  jupiter: { width: 100, x: 0, y: -35, rotate: 0 },
  saturn:  { width: 120, x: 0, y: -25, rotate: 0 },
  uranus:  { width:  80, x: 0, y: -20, rotate: 0 },
  neptune: { width:  70, x: 0, y: -10, rotate: 0 },
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
            initial={{ ...config[nameOf(planet) as keyof typeof config] }}
            animate={{ ...config[nameOf(planet) as keyof typeof config] }}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}
