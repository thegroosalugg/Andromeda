import NavButton from './NavButton';

export default function Navigation() {
  return (
    <header className=''>
      <nav>
        <ul className=''>
          <NavButton path='/' name='Home' />
          <NavButton path='/store' name='Space Store' />
          <NavButton path='/ships' name='SpaceShips' />
          <NavButton path='/explore' name='OuterSpace' />
        </ul>
      </nav>
    </header>
  );
}
