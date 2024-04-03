import { spaceships } from '../../assets/spaceships/spaceships';
import SpaceShipsList from '../../components/spaceships/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
    <SpaceShipsList className='ship-rows' spaceships={spaceships} />
    <SpaceShipsList className='ship-grid' spaceships={spaceships} />
    </>
  );
}
