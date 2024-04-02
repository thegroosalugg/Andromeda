import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faClock,
  faMoneyBill1Wave,
  faGaugeHigh,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

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
          <span>
            <FontAwesomeIcon icon={faClock} />
            <p>{year}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faBolt} />
            <p>{fuel}</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faGaugeHigh} />
            <p>{speed}M MPH</p>
          </span>
          <span>
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
            <p>${price}</p>
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ShipInfo;
