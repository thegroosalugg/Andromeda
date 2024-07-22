import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { AnimatePresence, motion } from 'framer-motion';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const { components } = useSelector((state: RootState) => state.active);
  console.log(components); // logData

  return (
    <motion.section layout className={css.universe}>
      <AnimatePresence>
        {components.includes('sun')   && <TheSun        key='sun' />}
        {components.includes('inner') && <Planets       key='inner' />}
        {components.includes('ast')   && <Asteroids     key='ast' />}
        {components.includes('outer') && <Planets outer key='outer' />}
      </AnimatePresence>
    </motion.section>
  );
}
