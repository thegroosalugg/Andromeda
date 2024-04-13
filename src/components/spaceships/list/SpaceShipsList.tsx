import SpaceShip from '../../../models/SpaceShip';
import List from '../../List';
import ShipItem from './ShipItem';
import css from './SpaceShipsList.module.css';

interface ListProps {
  spaceships: SpaceShip[];
  className: string;
}

export default function SpaceShipsList({ spaceships, className }: ListProps) {
  // configure framer motion animate effects
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1.2 },
  };

  const liTransition = { type: 'tween', duration: 0.5 };

  return (
      <List
        className={css[className]}
        items={spaceships}
        keyFn={({ id }) => id}
        liVariants={variants}
        liTransition={liTransition}
      >
        {(item) => <ShipItem className={className} {...item} />}
      </List>
  );
}
