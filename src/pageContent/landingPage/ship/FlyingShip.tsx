import { motion } from 'framer-motion';
import ship1 from '@/assets/flyingships/ship-01.png';
import ship2 from '@/assets/flyingships/ship-02.png';
import ship3 from '@/assets/flyingships/ship-03.png';
import ship4 from '@/assets/flyingships/ship-04.png';
import jetson from '@/assets/flyingships/jetson.png';
import rand from '@/util/rand';
import useRepeatAnimation from '@/hooks/useRepeatAnimation';

const FlyingShip = () => {
  const ships = [ship1, ship2, ship3, ship4];
  const duration = useRepeatAnimation({
    initialState: rand(4, 7),
    stateUpdateFn: () => rand(4, 7),
  });

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
        : [ '100vw', '50vw', '50vw', '50vw', '10vw', '-100vw'];
  }

  return (
    <div>
      <motion.img
        src={ship}
        alt='spaceship'
        key={duration}
        initial={{ x: enter, scaleX: direction }}
        animate={{ x: exit, rotateX, scale, y }}
        transition={{ type: 'easeIn', duration, delay: 0.1 }}
      />
    </div>
  );
};

export default FlyingShip;
