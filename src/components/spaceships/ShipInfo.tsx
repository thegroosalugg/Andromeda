import css from './ShipInfo.module.css';
import SpaceShip from '../../models/SpaceShip';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import FontAwesome from '../UI/FontAwesome'; // custom functional component
import MotionDiv from '../UI/MotionDiv';

const ShipInfo: React.FC<SpaceShip> = ({
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
    <section className={css.ship}>
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
          hidden: { y: 200 },
          visible: { y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h4>
          <FontAwesomeIcon icon={faGlobe} /> {maker}
        </h4>
        <h2>{model}</h2>
        <MotionDiv
          element='article'
          variants={{
            hidden: { opacity: 0, scaleY: 0 },
            visible: { opacity: 1, scaleY: 1 },
          }}
          transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
        >
          {info}
        </MotionDiv>
        {/* prettier-ignore */}
        <MotionDiv element='div' className={css.specs} transition={{ staggerChildren: 0.2 }}>
          <FontAwesome className={css['icon-config']} icon={['fas', 'bolt']}              text={fuel}              />
          <FontAwesome className={css['icon-config']} icon={['fas', 'gauge-high']}        text={`${speed}m Mph`}   />
          <FontAwesome className={css['icon-config']} icon={['fas', 'clock']}             text={`${year} (CE)`}    />
          <FontAwesome className={css['icon-config']} icon={['fas', 'money-bill-1-wave']} text={`$${price} daily`} />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default ShipInfo;
