import css from './Navigation.module.css';
import NavButton from './NavButton';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
  const { pathname } = useLocation();
  const background =
    pathname === '/ships'
      ? 'linear-gradient(to bottom, rgba(39, 86, 125, 0.4), rgba(34, 78, 115, 0.5))'
      : '';

  return (
    <nav className={css.nav} style={{ background }}>
      <ul>
        <NavButton path='/' name='H0M3' />
        <NavButton path='/store' name='ST0RE' />
        <NavButton path='/ships' name='SH1P5' />
        <NavButton path='/explore' name='EXPL0R3' />
      </ul>
    </nav>
  );
}
