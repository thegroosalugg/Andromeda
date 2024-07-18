import SpaceShip from '@/models/SpaceShip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import css from './StaticInfoCard.module.css';
import IconRow from '@/components/fontawesome/IconRow';

const StaticInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { maker, model, desc, fuel, speed, year, price } = spaceship;

  return (
    <motion.div
      className={css['ship-info']}
      initial={{ y: '-100px', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h4>
        <FontAwesomeIcon icon={['fas', 'globe']} /> {maker}
      </h4>
      <h3>{model}</h3>
      <motion.p
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
      >
        <span>{desc}</span>
      </motion.p>
      <IconRow
        className={css.icons}
        icons={[
          ['fas', 'bolt'],
          ['fas', 'gauge-high'],
          ['fas', 'clock'],
          ['fas', 'money-bill-1-wave'],
        ]}
        texts={[fuel, speed + 'm Mph', year + ' (CE)', price + ' daily']}
      />
    </motion.div>
  );
};

export default StaticInfoCard;
