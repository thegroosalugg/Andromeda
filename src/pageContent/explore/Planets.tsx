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

export default function Planets({ outer }: { outer?: boolean }) {
  const planets = outer ? [jupiter, saturn, uranus, neptune] : [mercury, venus, earth, mars];
  const { isActive, activeHandler } = useContext(ExploreContext);
  const { width, height } = useScreen();
  const activeSet = (isActive === 'inner' && !outer) || (isActive === 'outer' && outer);
  const mobileDev =   (width >= 320 && width <= 440) || (width / height > 1.8 && width < 1024);

  const nameOf = (planet: string) =>
    planet.match(
      /(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/
    )![0] as keyof typeof config;

  const adjust = (base: number) => base * (mobileDev ? 0.5 : 1) * (activeSet ? (outer ? 2 : 4) : 1);
  const margin = width > height ? 'marginBottom' : 'marginLeft';

  // prettier-ignore
  const config = {
    mercury: { width: adjust( 20), [margin]: 30, rotate: 0 },
    venus:   { width: adjust( 30), [margin]: 40, rotate: 0 },
    earth:   { width: adjust( 40), [margin]: 50, rotate: 0 },
    mars:    { width: adjust( 25), [margin]: 65, rotate: 0 },
    jupiter: { width: adjust(100), [margin]: 65, rotate: 0 },
    saturn:  { width: adjust(120), [margin]: 50, rotate: 0 },
    uranus:  { width: adjust( 70), [margin]: 40, rotate: 0 },
    neptune: { width: adjust( 60), [margin]: 30, rotate: 0 },
  };

  return (
    <motion.section
      className={`${css['planets']} ${activeSet ? css['active'] : ''}`}
      onClick={() => activeHandler(outer ? 'outer' : 'inner')}
      initial='hidden'
      animate='visible'
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.2, delayChildren: outer ? 1 : 0.5 }}
      // prettier-ignore
      style={{
                 flex: `1 1 ${outer ? 50 : 30}%`,
        flexDirection: width > height ? 'row' : 'column',
              padding: width > height ? '2rem 1rem' : activeClass ? '2rem 0' : 0,
      }}
    >
      {planets.map((planet) => {
        const key = nameOf(planet);

        return (
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
              alt={key}
              initial={{ ...config[key] }}
              animate={{ ...config[key] }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
}
