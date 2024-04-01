import '../components/spaceships/SpaceShips.css';
import { spaceships } from '../assets/spaceships/spaceships';
import List from '../components/List';
import ShipItem from '../components/spaceships/ShipItem';
import SpaceShip from '../models/SpaceShip';

export default function SpaceShipsPage() {
  return (
    <List className='spaceship' items={spaceships} keyFn={({ id }) => id}>
      {(item: SpaceShip) => <ShipItem {...item} />}
    </List>
  );
}
