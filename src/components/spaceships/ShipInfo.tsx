import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FontAwesome from '../UI/FontAwesome'; // custom functional component

const ShipInfo: React.FC<SpaceShip> = ({
  model,
  maker,
  image,
  info,
  fuel,
  speed,
  year,
  price,
}) => {
  return (
    <section className={css.ship}>
      <motion.img
        src={image}
        alt={model}
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
          <FontAwesomeIcon icon={faGlobe} /> {maker}
        </h4>
        <h2>{model}</h2>
        <motion.article
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
        >
          {info}
        </motion.article>
        <motion.div
          className={css.specs}
          initial='hidden'
          animate='visible'
          transition={{ staggerChildren: 0.2 }}
        >
          {/* prettier-ignore */}
          <FontAwesome className={css['icon-config']} icon={['fas', 'bolt']}              text={fuel}              />
          <FontAwesome className={css['icon-config']} icon={['fas', 'gauge-high']}        text={`${speed}m Mph`}   />
          <FontAwesome className={css['icon-config']} icon={['fas', 'clock']}             text={`${year} (CE)`}    />
          <FontAwesome className={css['icon-config']} icon={['fas', 'money-bill-1-wave']} text={`$${price} daily`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ShipInfo;
