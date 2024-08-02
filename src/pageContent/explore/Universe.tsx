import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import { AnimatePresence } from 'framer-motion';
import BackButton from './BackButton';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const { isActive, landscape } = useContext(ExploreContext);

  return (
    <section className={css.universe}>
      <AnimatePresence>{isActive !== 'all' && <BackButton />}</AnimatePresence>
      <section style={{ flexDirection: landscape ? 'row' : 'column' }}
      >
        {/* prettier-ignore */}
        <AnimatePresence>
        {(isActive === 'all' || isActive === 'sun'  ) && <TheSun    key='sun' />}
        {(isActive === 'all' || isActive === 'inner') && <Planets   key='inner' />}
        {(isActive === 'all' || isActive === 'ast'  ) && <Asteroids key='ast' />}
        {(isActive === 'all' || isActive === 'outer') && <Planets   key='outer' outer />}
      </AnimatePresence>
      </section>
    </section>
  );
}
