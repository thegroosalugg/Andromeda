import css from './LandingFooter.module.css';
import UFO from '../animations/ufo/UFO';
import MonsterValley from '../animations/monster/MonsterValley';

export default function LandingFooter() {
  return (
    <footer className={css.footer}>
      <UFO />
      <MonsterValley />
    </footer>
  );
}
