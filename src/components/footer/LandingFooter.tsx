import css from './LandingFooter.module.css';
import { motion } from 'framer-motion';
import UFO from '../spaceships/UFO';
import monster1 from '../../assets/footer/monster1.png';
import useRepeatAnimation from '../../hooks/useRepeatAnimation';
import rand from '../../util/rand';
// import monster2 from '../../assets/footer/monster2.png';

export default function LandingFooter() {
  const duration = useRepeatAnimation({ initialState: 5, stateUpdateFn: () => rand(4, 7) });
  const x = rand(-4, 4) * 100
  const scaleX = rand(1, 2) === 1 ? 1 : -1

  return (
    <footer className={css.footer}>
      <UFO />
      <motion.img
        src={monster1}
        alt='monster'
        key={duration}
        className={css.monster}
        initial={{ y: 100, x, scaleX }}
        animate={{ y: [100, 0, 100], x }}
        transition={{ duration }}
      />
      <div className={css.grass} />
    </footer>
  );
}
