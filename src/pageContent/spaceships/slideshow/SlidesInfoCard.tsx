import SpaceShip from '@/models/SpaceShip';
import { FontAwesomeBar } from '@/components/fontawesome/FontAwesomeBar';
import { motion } from 'framer-motion';
import css from './SlidesInfoCard.module.css';

const SlidesInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { model, rating, info, performance } = spaceship

  const variants = {
    hidden: { scale: 1.2, rotateY: 90, x: 15 },
    visible: {
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        delay: 0.2,
        stiffness: 100,
        damping: 10,
        mass: 1,
      }
    },
    exit: {
      x: 15,
      scale: 1.2,
      rotateY: -90,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
        velocity: 5,
        restSpeed: 10
      }
    }
  };

  return (
    <motion.article className={css.article} initial="hidden" animate="visible" exit="exit" variants={variants}>
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
