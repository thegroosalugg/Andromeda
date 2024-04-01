import './SpaceShips.css'
import SpaceShip from '../../models/SpaceShip';
import ShipItem from './ShipItem';

export default function SpaceShips({ spaceships }: { spaceships: SpaceShip[] }) {
  return (
    <main className='spaceship'>
      <h1>SPACESHIP CITY</h1>
      <ul>
        {spaceships.map((ship) => (
          <ShipItem key={ship.id} {...ship} />
        ))}
      </ul>
    </main>
  );
}
