import { motion } from 'framer-motion';
import useRepeatAnimation from '../../../hooks/useRepeatAnimation';
import rand from '../../../util/rand';
import monster1 from '../../../assets/monsters/monster1.png';
import monster2 from '../../../assets/monsters/monster2.png';

export default function Monster() {
  const duration = useRepeatAnimation({ initialState: 5, stateUpdateFn: () => rand(4, 7) });
  const monster = rand(1, 2) === 1 ? monster1 : monster2;
  const x = `${rand(-70, 70)}vw`;
  const y = Array(rand(1, 5)).fill(rand(0, 5) * 10); // creates an array with 1-5 elements, with values of either 0/10/20/30/40/50
  const scaleX = rand(1, 2) === 1 ? 1 : -1;
  const skewY = rand(1, 4) === 1 ? [0, 0, -25, 25, 0, 0] : 0

  return (
    <motion.img
      src={monster}
      alt='monster'
      key={duration}
      initial={{ x, scaleX }}
      animate={{ x, y: [100, ...y, 100], skewY }}
      transition={{ duration }}
    />
  );
}
