import css from './ShipDetails.module.css';
import SpaceShip from '../../../models/SpaceShip';
import { AnimatePresence, motion } from 'framer-motion';
import StaticInfoCard from './StaticInfoCard';

const ShipDetails: React.FC<SpaceShip> = (spaceship) => {
  const { id, image, model } = spaceship;

  return (
    <AnimatePresence mode='wait'>
      <motion.section
        key={id}
        className={css.ship}
        exit={{ scaleY: 0, x: -200 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <motion.img
          src={image}
          alt={model}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
      <StaticInfoCard {...spaceship} />
      </motion.section>
    </AnimatePresence>
  );
};

export default ShipDetails;
