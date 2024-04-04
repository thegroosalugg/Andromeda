import { spaceships } from '../../assets/spaceships/spaceships';
import SlideShow from '../../components/SlideShow';
import SpaceShipsList from '../../components/spaceships/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <SlideShow
        array={spaceships}
        variants={{
          hidden: { rotate: 0, opacity: 0, x: -200, scaleY: 0 },
          visible: { rotate: 0, opacity: 1, x: 0, scaleY: 1 },
          exit: { scaleY: 0, x: 200 }
        }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
      <SpaceShipsList
        className='ship-grid'
        spaceships={[...spaceships, ...spaceships]}
      />
    </>
  );
}
