import mercury from '@/assets/planets/mercury.png';
import venus from '@/assets/planets/venus.png';
import earth from '@/assets/planets/earth.png';
import mars from '@/assets/planets/mars.png';
import jupiter from '@/assets/planets/jupiter.png';
import saturn from '@/assets/planets/saturn.png';
import uranus from '@/assets/planets/uranus.png';
import neptune from '@/assets/planets/neptune.png';
import css from './Planets.module.css';

export default function Planets({ outer }: { outer?: boolean }) {
  const planets = outer ? [jupiter, saturn, uranus, neptune] : [mercury, venus, earth, mars];

  const findClass = (image: string) =>
    image.match(/(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/)![0];

  return (
    <section className={css.planets}>
      {planets.map((planet) => (
        <img src={planet} alt={planet} key={planet} className={css[findClass(planet)]} />
      ))}
    </section>
  );
}
