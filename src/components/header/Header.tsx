import { useLocation } from 'react-router-dom';
import MotionDiv from '../UI/MotionDiv';
import css from './Header.module.css';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const { pathname } = useLocation();

  const text = {
    '/': 'Welcome to Andromeda',
    '/store': 'Fashion out of this World',
    '/ships': 'Beyond Earth: Unveiling our Spaceships',
    '/explore': 'Explore the Galaxy',
  }[pathname];

  return (
    <AnimatePresence>
      {text && (
        <MotionDiv
          element='header'
          className={css.header}
          variants={{
            hidden: { x: -500, scaleY: 0, height: 0 },
            visible: { x: 0, scaleY: [0, 0, 0, 0.5, 1], height: 'auto' },
            exit: { scaleY: 0, height: 0 },
          }}
          transition={{ type: 'easeIn', duration: 0.8 }}
        >
          <MotionDiv
            key={pathname}
            element='h1'
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: [0, 0, 0, 0.5, 1] },
            }}
          >
            {text.toUpperCase()}
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
