import { useParams } from 'react-router-dom';
import { spaceships } from '../../assets/spaceships/spaceships';
import ShipDetails from '../../components/spaceships/ShipDetails';

export default function ShipIDPage() {
  const { id } = useParams();
  const spaceship = spaceships.find((spaceship) => spaceship.id === id);

  console.log(spaceship);

  if (!spaceship) {
    throw new Error('No Ship Found');
  }

  return <ShipDetails {...spaceship} />;
  // key will retrigger animations for this component each time we click on a new ship
}
