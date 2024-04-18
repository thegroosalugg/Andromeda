import { motion } from 'framer-motion';
import useRepeatAnimation from '../../../hooks/useRepeatAnimation';
import rand from '../../../util/rand';
import css from './Monster.module.css';
import monster1 from '../../../assets/monsters/monster1.png';
// import monster2 from '../../assets/monsters/monster2.png';

export default function Monster() {
  const duration = useRepeatAnimation({ initialState: 5, stateUpdateFn: () => rand(4, 7) });
  const x = `${rand(-80, 80)}vw`;
  const scaleX = rand(1, 2) === 1 ? 1 : -1;

  return (
    <motion.img
      src={monster1}
      alt='monster'
      key={duration}
      className={css.monster}
      initial={{ x, scaleX }}
      animate={{ x, y: [100, 0, 100] }}
      transition={{ duration }}
    />
  );
}
