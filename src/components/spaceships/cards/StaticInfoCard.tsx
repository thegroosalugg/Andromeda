import SpaceShip from '../../../models/SpaceShip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MotionDiv from '../../UI/MotionDiv';
import css from './StaticInfoCard.module.css';
import ShipIconRow from './ShipIconRow';

const StaticInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { maker, model, info } = spaceship;

  return (
    <MotionDiv
      element='div'
      className={css['ship-info']}
      variants={{
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1 }}
    >
      <h4>
        <FontAwesomeIcon icon={['fas', 'globe']} /> {maker}
      </h4>
      <h2>{model}</h2>
      <MotionDiv
        element='article'
        variants={{
          hidden: { scaleY: 0, opacity: 0 },
          visible: { scaleY: 1, opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
      >
        {info}
      </MotionDiv>
      <ShipIconRow {...spaceship} />
    </MotionDiv>
  );
};

export default StaticInfoCard;
