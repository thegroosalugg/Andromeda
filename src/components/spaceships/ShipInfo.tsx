import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FontMotion from '../UI/FontMotion'; // custom functional component
import MotionDiv from '../UI/MotionDiv';

const ShipInfo: React.FC<SpaceShip> = ({
  id,
  model,
  maker,
  image,
  info,
  fuel,
  speed,
  year,
  price,
}) => {
  return (
    <AnimatePresence mode='wait'>
      <MotionDiv
        element='section'
        key={id}
        className={css.ship}
        variants={{ exit: { scaleY: 0, x: -200 } }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <motion.img
          src={image}
          alt={model}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
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
            <FontAwesomeIcon icon={faGlobe} /> {maker}
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
      </MotionDiv>
    </AnimatePresence>
  );
};

export default ShipInfo;
