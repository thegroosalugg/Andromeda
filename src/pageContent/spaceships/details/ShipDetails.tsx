import css from './ShipDetails.module.css';
import SpaceShip from '@/models/SpaceShip';
import { AnimatePresence, motion } from 'framer-motion';
import StaticInfoCard from './StaticInfoCard';

const ShipDetails: React.FC<SpaceShip> = (spaceship) => {
  const { image, model } = spaceship;

  return (
    <AnimatePresence mode='wait'>
      <motion.section
        key={image}
        className={css.ship}
        exit={{
          opacity: [   1,    0.8,    0.2,      0],
            skewX: [   0,     25,     38,     50],
            skewY: [   0,     -2,     -7,    -10],
           scaleX: [   1,    0.5,    0.2,      0],
                y: ['0%', '-25%', '-50%', '-75%'],
                x: -20,
          transition: { type: 'tween', ease: 'linear', duration: 0.5 },
        }}
      >
        <motion.img
          src={image}
          alt={model}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <StaticInfoCard {...spaceship} />
      </motion.section>
    </AnimatePresence>
  );
};

export default ShipDetails;
