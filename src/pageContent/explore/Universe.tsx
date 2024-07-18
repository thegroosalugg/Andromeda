import TheSun from './Sun';
import SolarSystem from './SolarSystem';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  return (
    <section className={css.universe}>
      <TheSun />
      <SolarSystem />
      <Asteroids />
      <SolarSystem outer />
    </section>
  );
}
