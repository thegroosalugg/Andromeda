import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavButton({ path, name }: { path: string; name: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <li>
      {isActive && <motion.div layoutId='tab-ufo' className='ufo' />}
      <NavLink
        to={path}
        >
        {name}
      </NavLink>
      {isActive && <motion.div layoutId='tab-indicator' className='active-tab' />}
    </li>
  );
}
