import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const components = useSelector((state: RootState) => state.active);
  console.log(components)

  return (
    <section className={css.universe}>
      <TheSun />
      <Planets />
      <Asteroids />
      <Planets outer />
    </section>
  );
}
