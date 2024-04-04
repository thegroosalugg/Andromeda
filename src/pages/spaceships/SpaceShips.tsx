import { spaceships } from '../../assets/spaceships/spaceships';
import SlideShow from '../../components/SlideShow';
import SpaceShipsList from '../../components/spaceships/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <SlideShow
        array={spaceships}
        className='slideshow'
        variants={{ hidden: { x: 200 }, visible: { x: 0 } }}
      />
      <SpaceShipsList
        className='ship-grid'
        spaceships={[...spaceships, ...spaceships]}
      />
    </>
  );
}
