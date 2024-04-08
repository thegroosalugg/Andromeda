import SpaceShip from '../../../models/SpaceShip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MotionDiv from '../../UI/MotionDiv';
import css from './StaticInfoCard.module.css';
import IconRow from '../../UI/IconRow';

const StaticInfoCard: React.FC<SpaceShip> = (spaceship) => {
  const { maker, model, info, fuel, speed, year, price } = spaceship;

  return (
    <MotionDiv
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
    </MotionDiv>
  );
};

export default StaticInfoCard;
