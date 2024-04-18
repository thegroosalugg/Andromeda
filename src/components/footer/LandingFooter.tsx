import css from './LandingFooter.module.css';
import UFO from '../animations/ufo/UFO';
import Monster from '../animations/monster/Monster';

export default function LandingFooter() {
  return (
    <footer className={css.footer}>
      <UFO />
      <Monster />
      <div className={css.grass} />
    </footer>
  );
}
