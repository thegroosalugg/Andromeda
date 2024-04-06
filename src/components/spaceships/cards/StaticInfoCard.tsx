import SpaceShip from '../../../models/SpaceShip';
import FontMotion from '../../UI/FontMotion'; // custom functional component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MotionDiv from '../../UI/MotionDiv';
import css from './StaticInfoCard.module.css';

const StaticInfoCard: React.FC<SpaceShip> = ({ maker, model, info, fuel, speed, year, price }) => {
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
      {/* prettier-ignore */}
      <MotionDiv element='div' className={css.specs} transition={{ staggerChildren: 0.2 }}>
        <FontMotion className={css['icon-config']} icon={['fas', 'bolt']}              text={fuel}             />
        <FontMotion className={css['icon-config']} icon={['fas', 'gauge-high']}        text={speed + 'm Mph'}  />
        <FontMotion className={css['icon-config']} icon={['fas', 'clock']}             text={year  + ' (CE)'}  />
        <FontMotion className={css['icon-config']} icon={['fas', 'money-bill-1-wave']} text={price + ' daily'} />
      </MotionDiv>
    </MotionDiv>
  );
};

export default StaticInfoCard;
