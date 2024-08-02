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
  const landscape = width > height;
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

  const config = (key: Planet) => {
    const { width, align, rotate } = props[key];
    const margin = landscape ? 'marginBottom' : 'marginLeft';
    const   size = width * (mobileDev ? 0.5 : 1) * (activeSet ? (outer ? 2 : 4) : 1);

    return {
         width: size,
      [margin]: activeSet ? 0 : align,
        rotate: landscape ? 0 : rotate,
    };
  };

  return (
    <motion.section
      className={css['planets']}
      onClick={() => activeHandler(outer ? 'outer' : 'inner')}
      initial='hidden'
      animate='visible'
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.2, delayChildren: outer ? 1 : 0.5 }}
      // prettier-ignore
      whileHover={{
           borderColor: mobileDev || activeSet ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
            transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      // prettier-ignore
      style={{
                 flex: `1 1 ${outer ? 50 : 30}%`,
        flexDirection: landscape ? 'row' : 'column',
              padding: activeSet ? '2rem' : outer ? (landscape ? '1rem 1rem 0 0' : '0 0 1rem') : 0,
      }}
    >
      {planets.map((planet) => {
        const key = nameOf(planet);
        const animate = config(key);

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
          >
            <motion.img
              src={planet}
              alt={key}
              initial={animate}
              animate={animate}
              transition={{ duration: 1 }}
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
}
