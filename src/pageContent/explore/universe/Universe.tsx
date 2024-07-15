import SolarSystem from './SolarSystem';
import css from './Universe.module.css';

export default function Universe() {
  return (
    <section className={css.universe}>
      <SolarSystem />
      <SolarSystem outer />
    </section>
  );
}
