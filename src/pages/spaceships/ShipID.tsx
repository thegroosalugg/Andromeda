import { useParams } from 'react-router-dom';
import ShipDetails from '@/pageContent/spaceships/details/ShipDetails';
import Form from '@/components/form/Form';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import ErrorPage from '@/components/error/Error';

export default function ShipIDPage() {
  const { shipId } = useParams();
  const { ships } = useSelector((state: RootState) => state.ships);
  const spaceship = ships.find((spaceship) => spaceship.id === shipId);

  if (!spaceship) {
    return <ErrorPage />
  }

  return (
    <>
      <ShipDetails {...spaceship} />
      <Form />
    </>
  );
}
