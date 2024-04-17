import { motion } from 'framer-motion';
import ship1 from '../../../assets/banner/ship-01.png';
import ship2 from '../../../assets/banner/ship-02.png';
import ship3 from '../../../assets/banner/ship-03.png';
import ship4 from '../../../assets/banner/ship-04.png';
import jetson from '../../../assets/banner/jetson.png';
import rand from '../../../util/rand';
import useRepeatAnimation from '../../../hooks/useRepeatAnimation';

const ShipBanner: React.FC = () => {
  const ships = [ship1, ship2, ship3, ship4];
  const duration = useRepeatAnimation(4, 7);

  // % = slower entrance/exit. vw = greater delay on entrance, faster animation, faster exit.
  // must always use 100vw when animating from the right. Can use -100%/-100vw from the left.
  const [enter, direction]    = rand(1, 2) === 1 ? ['-100%', 1] : ['100vw', -1];
  let exit: string | string[] =  direction === 1 ?   '100vw'    : '-100%';
  let ship = ships[rand(0, 3)];

  const rotateX = rand(1, 5) === 1 ? [0, 0, 360, 0, 0]    : 0;
  const   scale = rand(1, 4) === 1 ? [1, 1.5, 1, 0.7, 1]  : 1;
  const       y = rand(1, 4) === 1 ? [0, -10, 10, -10, 0] : 0;

  if (rand(1, 15) === 1) {
    ship = jetson;
    exit =
      direction === 1
        ? ['-100vw', '50vw', '50vw', '50vw', '100vw']
        : ['100vw', '50vw', '50vw', '50vw', '10vw', '-100vw'];
  }

  return (
    <motion.img
      src={ship}
      alt='spaceship'
      key={duration}
      initial={{ x: enter, scaleX: direction }}
      animate={{ x: exit, rotateX, scale, y }}
      transition={{ type: 'easeIn', duration, delay: 0.1 }}
    />
  );
};

export default ShipBanner;
