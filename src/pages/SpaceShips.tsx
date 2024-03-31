import { spaceships } from '../assets/spaceships/spaceships';
import SpaceShips from '../components/spaceships/SpaceShips';

export default function SpaceShipsPage() {
  return <SpaceShips spaceships={spaceships} />;
}
