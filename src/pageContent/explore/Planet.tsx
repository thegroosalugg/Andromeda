import { ExploreContext } from '@/pages/explore/ExploreContext';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { useContext } from 'react';
import css from './Planet.module.css';

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

export default function Planet({
  planet,
  isActive,
  outer,
  index,
}: {
    planet: string;
  isActive: boolean | undefined;
     outer: boolean | undefined;
     index: number;
}) {
  const { activePlanet, setActivePlanet, isLandscape, isMobile } = useContext(ExploreContext);

  const name = nameOf(planet);

  // prettier-ignore
  const config = (key: Planet) => {
      const { width, align, rotate } = props[key];
      const size = width * (isMobile ? 0.5 : 1) * (isActive ? (outer ? 2 : 4) : 1);
      const isActiveSize = (key === 'saturn' ? 350 : 300) * (isMobile ? 0.5 : 1);

      return {
               width:  activePlanet ? isActiveSize  : size,
          marginLeft:  isLandscape || isActive ? 0 : align,
        marginBottom: !isLandscape || isActive ? 0 : align,
              rotate:  isLandscape ? (key === 'saturn' ? 25 : 0) : rotate,
      };
    };

  const animate = config(name);

  function activePlanetHandler(planet: string) {
    if (isActive) {
      setActivePlanet(planet);
    }
  }

  return (
    <LayoutGroup>
      <motion.div
        className={css.planet}
        layout
        transition={{ duration: 1.2 }}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { type: 'tween', ease: 'linear', duration: 0.5 },
          },
        }}
        style={{
                padding: !isMobile && !activePlanet ? '1rem 2rem' : '',
          flexDirection: isLandscape ? 'row' : 'column',
        }}
      >
        <AnimatePresence>
          {activePlanet === planet && (
            <motion.p
              layout
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: 1,
                scaleY: 1,
                transition: { delay: 1, duration: 0.5, ease: 'easeIn' },
              }}
              exit={{ opacity: 0, scaleY: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
              style={{ width: animate.width }}
            >
              <motion.span>{'I am waiting for a bus'.repeat(5)}</motion.span>
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {(!activePlanet || activePlanet === planet) && (
            <motion.img
              layout
              src={planet}
              alt={name}
              onClick={() => activePlanetHandler(planet)}
              initial={animate}
              animate={animate}
              exit={{ opacity: 0, rotate: 360, width: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isActive && !activePlanet && (
            <motion.h6
              style={{ fontSize: isMobile ? '0.5rem' : '1rem', top: isMobile ? 0 : '10px' }}
              initial={{ opacity: 0, x: animate.width - 50 }}
              animate={{
                opacity: 1,
                x: animate.width - (name === 'saturn' ? 30 : 0),
                transition: { delay: 1 + index * 0.2, duration: 1, ease: 'easeInOut' },
              }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
            >
              {name}
            </motion.h6>
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
