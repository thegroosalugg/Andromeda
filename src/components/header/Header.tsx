import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  const background = pathname === '/ships' ? 'linear-gradient(to bottom, rgba(34, 78, 115, 0.5), rgba(30, 72, 109, 0.6))' : ''

  const text = {
           '/': 'Welcome to Andromeda',
      '/store': 'Fashion out of this World',
      '/ships': 'Beyond Earth: Unveiling our Spaceships',
    '/explore': 'Explore the Galaxy',
  }[pathname];

  return (
    <motion.header
      className={css.header}
      initial={{ x: -500, scaleY: 0, height: 0 }}
      animate={{
        x: 0,
        scaleY: text ? [0, 0, 0, 0.5, 1] : 0,
        height: text ? 'auto' : 0,
      }}
      transition={{ type: 'easeIn', duration: 0.8 }}
      style={{ background }}

    >
      <motion.h1
        key={pathname}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: [0, 0, 0, 0.5, 1] }}
      >
        {text && text}
      </motion.h1>
    </motion.header>
  );
}
