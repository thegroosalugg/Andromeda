import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import { AnimatePresence } from 'framer-motion';
import BackButton from './BackButton';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const { activeFC, isLandscape, isMobile } = useContext(ExploreContext);

  return (
    <section className={css.universe} style={{ minHeight: isLandscape && isMobile ? '100vh' : '' }}>
      <AnimatePresence>{activeFC !== 'all' && <BackButton />}</AnimatePresence>
      <section style={{ flexDirection: isLandscape ? 'row' : 'column' }}>
        {/* prettier-ignore */}
        <AnimatePresence>
        {(activeFC === 'all' || activeFC === 'sun'  ) && <TheSun    key='sun' />}
        {(activeFC === 'all' || activeFC === 'inner') && <Planets   key='inner' />}
        {(activeFC === 'all' || activeFC === 'ast'  ) && <Asteroids key='ast' />}
        {(activeFC === 'all' || activeFC === 'outer') && <Planets   key='outer' outer />}
      </AnimatePresence>
      </section>
    </section>
  );
}
