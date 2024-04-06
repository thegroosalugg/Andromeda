import css from './ShipDetails.module.css';
import SpaceShip from '../../models/SpaceShip';
import { AnimatePresence, motion } from 'framer-motion';
import MotionDiv from '../UI/MotionDiv';
import StaticInfoCard from './cards/StaticInfoCard';

const ShipDetails: React.FC<SpaceShip> = (spaceship) => {
  const { id, image, model } = spaceship;

  return (
    <AnimatePresence mode='wait'>
      <MotionDiv
        element='section'
        key={id}
        className={css.ship}
        variants={{ exit: { scaleY: 0, x: -200 } }}
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
      </MotionDiv>
    </AnimatePresence>
  );
};

export default ShipDetails;
