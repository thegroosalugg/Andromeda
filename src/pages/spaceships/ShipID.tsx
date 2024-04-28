import ShipDetails from '@/pageContent/spaceships/details/ShipDetails';
import Form from '@/components/form/Form';
import ErrorPage from '@/components/error/Error';
import useSearch from '@/hooks/useSearch';

export default function ShipIDPage() {
  const { item: spaceship, id: shipId } = useSearch('shipId', 'ships', 'ships')

  console.log(spaceship, shipId)

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
