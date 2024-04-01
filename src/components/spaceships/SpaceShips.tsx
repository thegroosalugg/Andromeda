import SpaceShip from '../../models/SpaceShip';
import List from '../List';
import ShipItem from './ShipItem';
import css from './SpaceShips.module.css'

export default function SpaceShips({ spaceships }: { spaceships: SpaceShip[] }) {
  // configure framer motion animate effects
  const ulVariants = {
    visible: { opacity: 1 },
    hidden:  { opacity: 0 },
  };

  const liVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden:  { opacity: 0, scale: 1.2 },
  };

  const liTransition = { type: 'tween', duration: 0.5 }

  return (
    <List
      className={css.spaceship}
      items={spaceships}
      keyFn={({ id }) => id}
      ulVariants={ulVariants}
      liVariants={liVariants}
      liTransition={liTransition}
    >
      {(item) => <ShipItem {...item} />}
    </List>
  );
}
