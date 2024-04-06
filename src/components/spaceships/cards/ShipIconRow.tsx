import SpaceShip from '../../../models/SpaceShip';
import FontMotion from '../../UI/FontMotion';
import MotionDiv from '../../UI/MotionDiv';
import css from './ShipIconRow.module.css';

const ShipIconRow: React.FC<SpaceShip> = ({ fuel, speed, year, price }) => {
  return (
    <MotionDiv
      element='div'
      className={css.specs}
      transition={{ staggerChildren: 0.2 }}
    >
      <FontMotion icon={['fas', 'bolt']}              text={fuel}             />
      <FontMotion icon={['fas', 'gauge-high']}        text={speed + 'm Mph'}  />
      <FontMotion icon={['fas', 'clock']}             text={year  + ' (CE)'}  />
      <FontMotion icon={['fas', 'money-bill-1-wave']} text={price + ' daily'} />
    </MotionDiv>
  );
};

export default ShipIconRow;
