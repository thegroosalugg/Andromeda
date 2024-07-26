import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import { AnimatePresence, motion } from 'framer-motion';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const { isActive } = useContext(ExploreContext);

  return (
    <motion.section layout className={css.universe}>
      <AnimatePresence>
        {(isActive === 'all' || isActive === 'sun'  ) && <TheSun    key='sun' />}
        {(isActive === 'all' || isActive === 'inner') && <Planets   key='inner' />}
        {(isActive === 'all' || isActive === 'ast'  ) && <Asteroids key='ast' />}
        {(isActive === 'all' || isActive === 'outer') && <Planets   key='outer' outer />}
      </AnimatePresence>
    </motion.section>
  );
}
