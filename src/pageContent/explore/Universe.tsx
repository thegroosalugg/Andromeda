import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import TheSun from './Sun';
import Planets from './Planets';
import Asteroids from './Asteroids';
import css from './Universe.module.css';

export default function Universe() {
  const { components } = useSelector((state: RootState) => state.active);
  console.log(components); // logData

  return (
    <section className={css.universe}>
      {components.includes('sun')       && <TheSun />}
      {components.includes('inner')     && <Planets />}
      {components.includes('asteroids') && <Asteroids />}
      {components.includes('outer')     && <Planets outer />}
    </section>
  );
}
