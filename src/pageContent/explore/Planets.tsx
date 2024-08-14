import {
  // LayoutGroup,
   motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import Planet from './Planet';
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
  const { activeFC, activeHandler, activePlanet, isLandscape, isMobile } =
    useContext(ExploreContext);
  const activeSet = (activeFC === 'inner' && !outer) || (activeFC === 'outer' && outer);

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
        justifyContent:    activeSet ? (activePlanet ? 'center' : 'space-evenly') : 'space-between',
               padding: activeSet && !isMobile ? '2rem' : outer ? (isLandscape ? '0 1rem 0 0' : '0 0 1rem') : 0,
      }}
    >
      {/* <LayoutGroup> */}
        {planets.map((planet, index) => (
          <Planet key={planet} planet={planet} isActive={activeSet} outer={outer} index={index} />
        ))}
      {/* </LayoutGroup> */}
    </motion.section>
  );
}
