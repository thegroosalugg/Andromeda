import ShipDetails from '@/pageContent/spaceships/details/ShipDetails';
import Form from '@/components/form/Form';
import ErrorPage from '@/components/error/Error';
import useSearch from '@/hooks/useSearch';

export default function ShipIDPage() {
  const { item: spaceship } = useSearch('shipId', 'ships', 'ships')

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
