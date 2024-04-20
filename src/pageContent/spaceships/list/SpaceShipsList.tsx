import SpaceShip from '@/models/SpaceShip';
import List from '@/components/list/List';
import ShipItem from './ShipItem';
import css from './SpaceShipsList.module.css';

interface ListProps {
  spaceships: SpaceShip[];
  className: string;
}

export default function SpaceShipsList({ spaceships, className }: ListProps) {
  return (
    <List
      className={css[className]}
      items={spaceships}
      keyFn={({ id }) => id}
    >
      {(item) => <ShipItem className={className} {...item} />}
    </List>
  );
}
