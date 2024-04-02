import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FontAwesome from '../UI/FontAwesome'; // custom functional component

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
        <h4>
          <FontAwesomeIcon icon={faGlobe} /> {make}
        </h4>
        <h2>{name}</h2>
        <article>{specs}</article>
        <div className={css.specs}>
          <FontAwesome className={css['icon-config']} icon={['fas', 'clock']} text={`${year} CE`} />
          <FontAwesome className={css['icon-config']} icon={['fas', 'bolt']} text={fuel} />
          <FontAwesome className={css['icon-config']} icon={['fas', 'gauge-high']} text={`${speed}m Mph`} />
          <FontAwesome className={css['icon-config']} icon={['fas', 'money-bill-1-wave']} text={`$${price}`} />
        </div>
      </motion.div>
    </section>
  );
};

export default ShipInfo;
