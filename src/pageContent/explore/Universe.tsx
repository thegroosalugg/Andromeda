import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const [isActive, setIsActive] = useState('all');

  return (
    <motion.section layout className={css.universe}>
      <AnimatePresence>
        {(isActive === 'all' || isActive === 'sun') && (
          <TheSun key='sun' isActive={isActive} setIsActive={setIsActive} />
        )}
        {(isActive === 'all' || isActive === 'inner') && (
          <Planets key='inner' isActive={isActive} setIsActive={setIsActive} />
        )}
        {(isActive === 'all' || isActive === 'ast') && (
          <Asteroids key='ast' isActive={isActive} setIsActive={setIsActive} />
        )}
        {(isActive === 'all' || isActive === 'outer') && (
          <Planets key='outer' outer isActive={isActive} setIsActive={setIsActive} />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
