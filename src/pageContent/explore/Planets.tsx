import { motion } from 'framer-motion';
import mercury from '@/assets/planets/mercury.png';
import venus from '@/assets/planets/venus.png';
import earth from '@/assets/planets/earth.png';
import mars from '@/assets/planets/mars.png';
import jupiter from '@/assets/planets/jupiter.png';
import saturn from '@/assets/planets/saturn.png';
import uranus from '@/assets/planets/uranus.png';
import neptune from '@/assets/planets/neptune.png';
import css from './Planets.module.css';

export default function Planets({
  isActive,
  setIsActive,
  outer,
}: {
  isActive: string;
  setIsActive: (id: string) => void;
  outer?: boolean;
}) {
  const planets = outer ? [jupiter, saturn, uranus, neptune] : [mercury, venus, earth, mars];

  const findClass = (image: string) =>
    image.match(/(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/)![0];

  console.log(isActive); // logData

  return (
    <motion.section
      className={css.planets}
      onClick={() => setIsActive(outer ? 'outer' : 'inner')}
      initial='hidden'
      animate='visible'
      exit={{ x: outer ? 500 : -500, opacity: 0, transition: { duration: 0.8 } }}
      transition={{ staggerChildren: 0.2, delayChildren: outer ? 1 : 0.5 }}
    >
      {planets.map((planet) => (
        <motion.div
          key={planet}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: [0, 1], scale: 1 },
          }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
        >
          <img src={planet} alt={planet} className={css[findClass(planet)]} />
        </motion.div>
      ))}
    </motion.section>
  );
}
