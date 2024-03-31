import SpaceShip from '../../models/SpaceShip';
import ShipItem from './ShipItem';

export default function SpaceShips({ spaceships }: { spaceships: SpaceShip[] }) {
  return (
    <div>
      <h1>SpaceShip Rentals</h1>
      <ul>
        {spaceships.map((ship) => (
          <ShipItem key={ship.id} {...ship} />
        ))}
      </ul>
    </div>
  );
}
