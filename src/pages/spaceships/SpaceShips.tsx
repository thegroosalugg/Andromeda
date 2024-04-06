import { spaceships } from '../../assets/spaceships/spaceships';
import SlideShow from '../../components/SlideShow';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <SlideShow array={spaceships} />
      <SpaceShipsList className='ship-grid' spaceships={spaceships} />
    </>
  );
}
