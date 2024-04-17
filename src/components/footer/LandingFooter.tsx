import css from './LandingFooter.module.css';
import UFO from '../spaceships/UFO';

export default function LandingFooter() {
  return (
    <footer className={css.footer}>
      <UFO />
      <div className={css.grass} />
    </footer>
  );
}
