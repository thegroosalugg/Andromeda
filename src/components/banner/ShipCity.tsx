import { useEffect, useState } from 'react';
import ShipBanner from './ShipBanner';
import css from './ShipCity.module.css'

export default function ShipCity() {
  const [renderKey, setRenderKey] = useState('');

  useEffect(() => {

    const interval = setInterval(() => {
      setRenderKey(Date.now().toString());
    }, 7000);

    return () => clearInterval(interval);
  }, [renderKey]);

  return (
    <div className={css.city}>
      <ShipBanner key={`ship1-${renderKey}`} />
      <ShipBanner key={`ship2-${renderKey}`} />
      <ShipBanner key={`ship3-${renderKey}`} />
      <ShipBanner key={`ship4-${renderKey}`} />
    </div>
  );
}
