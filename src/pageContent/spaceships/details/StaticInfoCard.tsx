import SpaceShip from '../../../models/SpaceShip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import css from './StaticInfoCard.module.css';
import IconRow from '../../../components/fontawesome/IconRow';

const StaticInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { maker, model, info, fuel, speed, year, price } = spaceship;

  return (
    <motion.div
      className={css['ship-info']}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h4>
        <FontAwesomeIcon icon={['fas', 'globe']} /> {maker}
      </h4>
      <h2>{model}</h2>
      <motion.article
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
      >
        {info}
      </motion.article>
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
