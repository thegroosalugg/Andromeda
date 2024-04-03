import { spaceships } from '../../assets/spaceships/spaceships';
import SpaceShipsList from '../../components/spaceships/SpaceShipsList';
import css from '../../components/spaceships/SpaceShipsList.module.css';

export default function SpaceShipsPage() {
  return (
    <SpaceShipsList className={css['ship-grid']} spaceships={spaceships} />
  );
}
