import { AnimatePresence, motion } from 'framer-motion';
import css from './Header.module.css';
import useUIConfig from '@/hooks/useUIConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const { pathname, background, borderBottom, text } = useUIConfig();

  return (
    <motion.header
      className={css.header}
      initial={{ x: -500, scaleY: 0, height: 0 }}
      animate={{
        x: 0,
        scaleY: text ? [0, 0, 0, 0.5, 1] : 0,
        height: text ? 'auto' : 0,
        background,
        borderBottom,
      }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      <AnimatePresence mode='popLayout'>
        <motion.h1
          key={pathname}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 0, 0, 0.5, 1], x: pathname === '/store' ? 50 : 0 }}
          exit={{ scaleY: 0, opacity: 0 }}
        >
          {text && text}
        </motion.h1>
        {pathname === '/store' && (
          <motion.button
            initial={{ y: -100, x: -20, rotate: 540 }}
            animate={{ y: [25, 0], x: 0, rotate: 0 }}
            exit={{ y: 100, rotate: 540, opacity: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, rotate: -400 }}
            transition={{ type: 'spring', stiffness: 50, damping: 5 }}
          >
            <FontAwesomeIcon icon={['fas', 'cart-shopping']} size='2x' />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
