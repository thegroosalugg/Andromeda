import ShipBanner from './ShipBanner';
import css from './ShipCity.module.css'

export default function ShipCity() {
  return (
    <div className={css.city}>
      <ShipBanner />
      <ShipBanner />
      <ShipBanner />
      <ShipBanner />
    </div>
  );
}
