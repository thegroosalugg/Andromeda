import SpaceShip from '../../../models/SpaceShip';
import { FontAwesomeBar } from '../../UI/FontAwesomeBar';
import MotionDiv from '../../UI/MotionDiv';
import css from './SlidesInfoCard.module.css'

const SlidesInfoCard: React.FC<SpaceShip> = ({ model, rating, info, performance }) => {
  return (
    <MotionDiv
      element='article'
      className={css.article}
      variants={{
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: [0, 0, 0.6, 0.8, 1], x: 0 },
        exit: { opacity: 0, y: 100 },
      }}
      transition={{ type: 'easeInOut', duration: 1 }}
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
    </MotionDiv>
  );
};

export default SlidesInfoCard;
