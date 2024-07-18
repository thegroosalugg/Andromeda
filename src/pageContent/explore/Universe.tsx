import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  return (
    <section className={css.universe}>
      <TheSun />
      <Planets />
      <Asteroids />
      <Planets outer />
    </section>
  );
}
