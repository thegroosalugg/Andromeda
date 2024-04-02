import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';

const ShipInfo: React.FC<SpaceShip> = ({
  name,
  make,
  image,
  price,
  year,
  fuel,
  speed,
  specs,
}) => {
  return (
    <section className={css.ship}>
      <motion.img
        src={image}
        alt={name}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={css['ship-info']}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4>From {make}</h4>
        <h2>{name}</h2>
        <article>{specs}</article>
        <div className={css.specs}>
            <p>YEAR {year}</p>
            <p>{fuel}</p>
            <p>{speed}M GMP/H</p>
            <p>RATE ${price}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ShipInfo;
