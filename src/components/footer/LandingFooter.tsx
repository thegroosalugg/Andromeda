import css from './LandingFooter.module.css';
import { motion } from 'framer-motion';
import UFO from '../spaceships/UFO';
import monster1 from '../../assets/footer/monster1.png';
// import monster2 from '../../assets/footer/monster2.png';

export default function LandingFooter() {


  return (
    <footer className={css.footer}>
      <UFO />
      <motion.img
        src={monster1}
        alt='monster'
        className={css.monster}
        initial={{ y: 100  }}
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 5, repeat: Infinity}}
      />
      <div className={css.grass} />
    </footer>
  );
}
