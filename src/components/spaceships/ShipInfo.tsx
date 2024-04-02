import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';

const ShipInfo: React.FC<SpaceShip> = ({ name, image, desc, price }) => {
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
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{price}</p>
      </motion.div>
    </section>
  );
};

export default ShipInfo;
