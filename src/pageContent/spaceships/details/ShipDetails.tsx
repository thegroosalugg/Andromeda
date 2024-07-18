import css from './ShipDetails.module.css';
import SpaceShip from '@/models/SpaceShip';
import { motion } from 'framer-motion';
import StaticInfoCard from './StaticInfoCard';

const ShipDetails: React.FC<SpaceShip> = (spaceship) => {
  const { image, model } = spaceship;

  return (
    <section className={css.ship}>
      <motion.img
        src={image}
        alt={model}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <StaticInfoCard {...spaceship} />
    </section>
  );
};

export default ShipDetails;
