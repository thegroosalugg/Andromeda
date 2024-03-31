import './Navigation.css'
import NavButton from './NavButton';

export default function Navigation() {
  return (
      <nav className='nav'>
        <ul>
          <NavButton path='/'        name='Home'       />
          <NavButton path='/store'   name='SpaceStore' />
          <NavButton path='/ships'   name='SpaceShips' />
          <NavButton path='/explore' name='OuterSpace' />
        </ul>
      </nav>
  );
}
