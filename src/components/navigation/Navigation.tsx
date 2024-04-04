import css from './Navigation.module.css'
import NavButton from './NavButton';

export default function Navigation() {
  return (
      <nav className={css.nav}>
        <ul>
          <NavButton path='/'        name='Home'       />
          <NavButton path='/store'   name='Store' />
          <NavButton path='/ships'   name='Ships' />
          <NavButton path='/explore' name='Explore' />
        </ul>
      </nav>
  );
}
