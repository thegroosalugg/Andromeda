import css from './Navigation.module.css'
import NavButton from './NavButton';

export default function Navigation() {
  return (
      <nav className={css.nav}>
        <ul>
          <NavButton path='/'        name='Home'       />
          <NavButton path='/store'   name='SpaceStore' />
          <NavButton path='/ships'   name='SpaceShips' />
          <NavButton path='/explore' name='OuterSpace' />
        </ul>
      </nav>
  );
}
