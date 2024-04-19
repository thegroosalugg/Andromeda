import css from './LandingFooter.module.css';
import UFO from '../ufo/UFO';
import MonsterValley from '../monster/MonsterValley';

export default function LandingFooter() {
  return (
    <footer className={css.footer}>
      <UFO />
      <MonsterValley />
    </footer>
  );
}
