import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import { AnimatePresence } from 'framer-motion';
import useScreen from '@/hooks/useScreen';
import BackButton from './BackButton';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const { isActive } = useContext(ExploreContext);
  const { width, height } = useScreen();

  return (
    <section className={css.universe}>
      <AnimatePresence>{isActive !== 'all' && <BackButton />}</AnimatePresence>
      <section style={{ flexDirection: width > height ? 'row' : 'column' }}
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
