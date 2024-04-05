import css from './Navigation.module.css'
import NavButton from './NavButton';

export default function Navigation() {
  return (
      <nav className={css.nav}>
        <ul>
          <NavButton path='/'        name='H0M3'       />
          <NavButton path='/store'   name='ST0RE' />
          <NavButton path='/ships'   name='SH1P5' />
          <NavButton path='/explore' name='EXPL0R3' />
        </ul>
      </nav>
  );
}
