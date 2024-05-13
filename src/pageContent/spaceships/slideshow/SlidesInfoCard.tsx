import SpaceShip from '@/models/SpaceShip';
import { FontAwesomeBar } from '@/components/fontawesome/FontAwesomeBar';
import { motion } from 'framer-motion';
import css from './SlidesInfoCard.module.css';

const SlidesInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { model, rating, info, performance } = spaceship

  return (
    <motion.article
      className={css.article}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'linear', duration: 0.5 }}
    >
      <h2>{model}</h2>

      <div>
        <FontAwesomeBar icon='star' size={5} amount={rating} />
      </div>

      <p className={css.info}>
        <strong>{info}</strong>
      </p>

      <div className={css.progress}>
        {Object.entries(performance).map(([key, value]) => (
          <div key={key}>
            <p>{key}</p>
            <FontAwesomeBar icon='circle' size={10} amount={value} />
          </div>
        ))}
      </div>
    </motion.article>
  );
};

export default SlidesInfoCard;
