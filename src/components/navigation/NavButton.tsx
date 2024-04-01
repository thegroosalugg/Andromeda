import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavButton({ path, name }: { path: string; name: string }) {
  const { pathname } = useLocation();
  // this condition may need further tweaking depending on how many other dynamic paths there will be
  const isActive = pathname === path || (pathname.startsWith(path) && path !== '/'); // keep an eye on this

  path === '/' && console.clear(); // clear the console before first component renders
  console.log('    [PATH]:', path, '\n', '\n', '[CURRENT]:', pathname, '\n', '\n', '[ACTIVE?]:', isActive);

  return (
    <li>
      {isActive && (
        <motion.div
          layoutId='tab-ufo'
          className='ufo'
          initial={{ opacity: 0.1, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />
      )}
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : 'idle')}
        to={path} // 'active' class applies automatically without prop. Prop added to set 'idle'
      >
        {name}
      </NavLink>
      {isActive && (
        <motion.div layoutId='tab-indicator' className='active-tab' />
      )}
    </li>
  );
}
