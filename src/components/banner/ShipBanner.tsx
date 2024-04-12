import { motion } from 'framer-motion';
import ship1 from '../../assets/banner/ship-01.png';
import ship2 from '../../assets/banner/ship-02.png';
import ship3 from '../../assets/banner/ship-03.png';
import ship4 from '../../assets/banner/ship-04.png';
import css from './ShipBanner.module.css';
import rand from '../../util/rand';

const ShipBanner: React.FC<{ reverse?: boolean }> = ({ reverse }) => {
  const ships = [ship1, ship2, ship3, ship4];
  const duration = rand(3, 5);
  const rotateX = rand(1, 5) === 1 ? 360 : 0;
  const scale = rand(1, 4) === 1 ? [1, 1.5, 1, 0.7, 1] : 1

  return (
    <div className={css.banner}>
      <motion.img
        src={ships[rand(0, 3)]}
        alt='spaceship'
        initial={{ x: reverse ? '-100%' : '100vw', scaleX: reverse ? 1 : -1 }}
        whileInView={{ x: reverse ? '100vw' : '-100%', rotateX, scale }}
        transition={{ type: 'easeIn', duration, repeat: Infinity }}
      />
    </div>
  );
};

export default ShipBanner;
