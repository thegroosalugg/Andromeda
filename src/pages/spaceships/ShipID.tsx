import { useParams } from 'react-router-dom';
import { spaceships } from '../../assets/spaceships/spaceships';
import ShipInfo from '../../components/spaceships/ShipInfo';
import SpaceShipsList from '../../components/spaceships/SpaceShipsList';

export default function ShipIDPage() {
  const { id } = useParams();
  const spaceship = spaceships.find((spaceship) => spaceship.id === id);

  console.log(spaceship);

  if (!spaceship) {
    throw new Error('No Ship Found');
  }

  return (
    <>
    {/* key will retrigger animations for this component each time we click on a new ship */}
      <ShipInfo key={id} {...spaceship} />
      <SpaceShipsList className='ships-row-list' spaceships={spaceships} />
    </>
  );
}
