import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ship1 from '../../assets/banner/ship-01.png';
import ship2 from '../../assets/banner/ship-02.png';
import ship3 from '../../assets/banner/ship-03.png';
import ship4 from '../../assets/banner/ship-04.png';
import jetson from '../../assets/banner/jetson.png';
import rand from '../../util/rand';

const ShipBanner: React.FC = () => {
  const ships = [ship1, ship2, ship3, ship4];
  const [duration, setDuration] = useState(rand(4, 7));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(rand(4, 7));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const [enter, exit, direction] =
    rand(1, 2) === 1 ? ['-100%', '100vw', 1] : ['100vw', '-100%', -1];

  const rotateX = rand(1, 5) === 1 ? [0, 0, 360, 0, 0] : 0;
  const scale = rand(1, 4) === 1 ? [1, 1.5, 1, 0.7, 1] : 1;
  const y = rand(1, 5) === 1 ? [0, 0, 20, 0, 0] : [0, 0, -20, 0, 0];

  if (rand(1, 5) === 1) {
    return (
      <motion.img
        src={jetson}
        alt='jetson'
        key={duration}
        initial={{ x: '-100%', scaleX: 1, y: 0 }}
        animate={{ x: ['-100%', '50vw', '50vw', '50vw', '100vw'], rotateX, scale, y: [0, 0, 30, 0, 0] }}
        transition={{ type: 'easeIn', duration, delay: 0.1 }}
      />
    );
  }

  return (
    <motion.img
      src={ships[rand(0, 3)]}
      alt='spaceship'
      key={duration}
      initial={{ x: enter, scaleX: direction }}
      animate={{ x: exit, rotateX, scale, y }}
      transition={{ type: 'easeIn', duration, delay: 0.1 }}
    />
  );
};

export default ShipBanner;
