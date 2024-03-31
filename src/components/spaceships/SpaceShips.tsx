import ShipItem from './ShipItem';

interface SpaceShip {
  id: string;
  name: string;
  image: string;
  desc: string;
  price: number;
}

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
