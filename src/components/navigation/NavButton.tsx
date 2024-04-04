import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import css from './Navigation.module.css';


export default function NavButton({ path, name }: { path: string; name: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === path || (pathname.startsWith(path) && path !== '/');

  path === '/' && console.clear(); // clear the console before first component renders
  // console.log('    [PATH]:', path, '\n', '\n', '[CURRENT]:', pathname, '\n', '\n', '[ACTIVE?]:', isActive);

  const chance = Math.floor(Math.random() * 4) + 1
  const rotate = chance === 1 ? 720 : 0
  const  scale = chance === 1 ?  [1, 1.5, 2, 1.5, 1.2] : 1.2

  return (
    <li>
      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            layoutId='tab-ufo'
            className={css.ufo}
            initial={{ opacity: 0, scale: 0.8, rotate }}
            animate={{ opacity: 1, scale, rotate }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'backInOut', duration: 0.8 }}
          />
        )}
        <motion.p
          initial={{ y: !isActive ? 40 : -40 }}
          animate={{ y: isActive ? 0 : 30 }}
          transition={{ type: 'easeInOut', duration: 1 }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.idle)}
            to={path} // 'active' class applies automatically without prop. Prop added to set 'idle'
          >
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
