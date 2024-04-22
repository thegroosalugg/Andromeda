import css from './Navigation.module.css';
import NavButton from './NavButton';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
  const { pathname } = useLocation();
  const background = pathname === '/ships' ? ['#224f7300', '#224f7362', '#224e7380'] : '#224f7300';

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
        </ul>
      </motion.nav>
    </>
  );
}
