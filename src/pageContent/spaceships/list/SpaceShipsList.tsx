import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import List from '@/components/list/List';
import ShipItem from './ShipItem';
import css from './SpaceShipsList.module.css';

interface ListProps {
  className: string;
}

export default function SpaceShipsList({ className }: ListProps) {
  const { ships } = useSelector((state: RootState) => state.ships)

  return (
    <List
      className={css[className]}
      items={ships}
      keyFn={({ id }) => id}
    >
      {(item) => <ShipItem className={className} {...item} />}
    </List>
  );
}
