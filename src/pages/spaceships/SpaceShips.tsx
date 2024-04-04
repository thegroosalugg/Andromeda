import { spaceships } from '../../assets/spaceships/spaceships';
import SlideShow from '../../components/SlideShow';
import SpaceShipsList from '../../components/spaceships/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <SlideShow
        array={spaceships}
        className=''
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      />
      <SpaceShipsList
        className='ship-grid'
        spaceships={[...spaceships, ...spaceships]}
      />
    </>
  );
}
