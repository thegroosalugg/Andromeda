import ShipDetails from '@/pageContent/spaceships/details/ShipDetails';
import Form from '@/components/form/Form';
import ErrorPage from '@/components/error/Error';
import useSearch from '@/hooks/useSearch';

export default function ShipIDPage() {
  const { item: spaceship }  = useSearch({ slugId: 'shipId', reducer: 'ships', sliceKey: 'ships' });

  if (!spaceship) {
    return <ErrorPage />
  }

  return (
    <>
      <ShipDetails {...spaceship} />
      <Form withBooking />
    </>
  );
}
