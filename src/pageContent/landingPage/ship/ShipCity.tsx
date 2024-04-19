import FlyingShip from './FlyingShip';
import css from './ShipCity.module.css'

export default function ShipCity() {
  return (
    <div className={css.city}>
      <FlyingShip />
      <FlyingShip />
      <FlyingShip />
      <FlyingShip />
      <FlyingShip />
    </div>
  );
}
