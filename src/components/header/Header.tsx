import { useLocation } from 'react-router-dom';
import MotionDiv from '../UI/MotionDiv';
import css from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();

  const text = {
    '/': 'Welcome to Andromeda',
    '/store': 'Fashion out of this World',
    '/ships': 'Beyond Earth: Unveiling our Spaceships',
    '/explore': 'Explore the Galaxy',
  }[pathname];

  return (
    <MotionDiv
      element='header'
      className={css.header}
      variants={{
        hidden: { x: -500, scaleY: 0, height: 0 },
        visible: { x: 0, scaleY: text ? [0, 0, 0, 0.5, 1] : 0, height: text ? 'auto' : 0 }
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
        {text && text.toUpperCase()}
      </MotionDiv>
    </MotionDiv>
  );
}
