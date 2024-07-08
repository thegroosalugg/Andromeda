import SpaceShip from '@/models/SpaceShip';
import { FontAwesomeBar } from '@/components/fontawesome/FontAwesomeBar';
import { motion } from 'framer-motion';
import css from './SlidesInfoCard.module.css';

const SlidesInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { model, rating, desc, performance } = spaceship;

  const variants = {
    initial: { x: '75%', opacity: 0 },
    animate: { x:     0, opacity: 1 },
       exit: { x: '75%', opacity: 0 },
  };

  return (
    <motion.article
      className={css.article}
      {...variants}
      transition={{
             type: 'spring',
        stiffness: 500,
          damping: 50,
      }}
    >
      <div className={css.info}>
        <h2>{model}</h2>
        <FontAwesomeBar icon='star' size={5} amount={rating} />
      </div>

      <p>
        <strong>{desc}</strong>
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
