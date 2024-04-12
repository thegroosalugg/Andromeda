import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import css from './Navigation.module.css';
import rand from '../../util/rand';

export default function NavButton({ path, name }: { path: string; name: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === path || (pathname.startsWith(path) && path !== '/');

  path === '/' && console.clear(); // clear the console before first component renders
  // console.log('    [PATH]:', path, '\n', '\n', '[CURRENT]:', pathname, '\n', '\n', '[ACTIVE?]:', isActive);

  const rotate = rand(1, 4) === 1 ? 720 : 0
  const  scale = rand(1, 4) === 1 ? [1, 1.5, 2, 1.5, 1.2] : 1.2

  return (
    <li>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key='tab-ufo'
            layoutId='tab-ufo'
            className={css.ufo}
            initial={{ opacity: 0, scale: 0.8, rotate }}
            animate={{ opacity: 1, scale, rotate }}
            transition={{ type: 'backInOut', duration: 0.8 }}
          />
        )}
        <motion.p
          key={path}
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'easeIn', duration: 0.5 }}
        >
          <NavLink className={isActive ? css.active : css.idle} to={path}>
            {name}
          </NavLink>
        </motion.p>
      </AnimatePresence>
      {isActive && (
        <motion.div layoutId='tab-indicator' className={css['active-tab']} />
      )}
    </li>
  );
}

// the jury is still out whether AnimatePresense is needed here. We are not using any exit animations when the UFO
// leaves the DOM. However removing it also removes the delay between the NavLinks moving back to their place.
// For now, it stays until more of the app is developed, This component cost me a whole day due to warnings and off key behaviour
