import { useParams } from 'react-router-dom';
import ShipDetails from '@/pageContent/spaceships/details/ShipDetails';
import Form from '@/components/form/Form';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

export default function ShipIDPage() {
  const { id } = useParams();
  const { ships } = useSelector((state: RootState) => state.ships)
  const spaceship = ships.find((spaceship) => spaceship.id === id);

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
