import css from './Navigation.module.css';
import NavButton from './NavButton';
import { motion } from 'framer-motion';
import useUIConfig from '@/hooks/useUIConfig';

export default function Navigation() {
  const { background } = useUIConfig();

  return (
    <>
      <motion.nav
        className={css.nav}
        animate={{
          background,
          transition: { duration: 0.8, ease: 'easeInOut' },
        }}
      >
        <ul>
          <NavButton path='/' name='H0M3' />
          <NavButton path='/store' name='ST0RE' />
          <NavButton path='/ships' name='SH1P5' />
          <NavButton path='/explore' name='EXPL0R3' />
          <NavButton path='/user' name='P0RTAL' />
        </ul>
      </motion.nav>
    </>
  );
}
