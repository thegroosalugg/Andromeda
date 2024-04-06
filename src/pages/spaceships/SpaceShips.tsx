import { spaceships } from '../../assets/spaceships/spaceships';
import SlideShow from '../../components/SlideShow';
import Header from '../../components/header/Header';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <Header text='beyond earth: unveiling our spaceships' />
      <SlideShow array={spaceships} />
      <SpaceShipsList className='ship-grid' spaceships={spaceships} />
    </>
  );
}
