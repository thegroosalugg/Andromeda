import { useParams } from 'react-router-dom';
import { spaceships } from '../../assets/spaceships/spaceships';
import ShipDetails from '../../components/spaceships/ShipDetails';
import Form from '../../components/form/Form';

export default function ShipIDPage() {
  const { id } = useParams();
  const spaceship = spaceships.find((spaceship) => spaceship.id === id);

  console.log(spaceship);

  if (!spaceship) {
    throw new Error('No Ship Found');
  }

  return (
    <>
      <ShipDetails {...spaceship} />
      <Form />
    </>
  );
}
