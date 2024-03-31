import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavButton({ path, name }: { path: string; name: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === path;

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
