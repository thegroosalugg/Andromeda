import css from './LandingFooter.module.css';
import UFO from '../animations/ufo/UFO';
import MonsterValley from '../animations/monster/MonsterValley';
import { motion } from 'framer-motion';

export default function LandingFooter() {
  return (
    <footer className={css.footer}>
      <UFO />
      <MonsterValley />
      <div className={css.grass}>
        <motion.button
          whileHover={{ scale: 1.2, color: '#FFFFFF', textShadow: '2px 2px 4px #4B0082' }}
          animate={{
            color: [
              '#FF0000',
              '#FF7F00',
              '#FFFF00',
              '#00FF00',
              '#0000FF',
              '#4B0082',
              '#9400D3',
              '#FF0000',
            ],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          CREDITS
        </motion.button>
      </div>
    </footer>
  );
}
