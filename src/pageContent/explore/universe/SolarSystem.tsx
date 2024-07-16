import       sun from '@/assets/planets/sun.png';
import   mercury from '@/assets/planets/mercury.png';
import     venus from '@/assets/planets/venus.png';
import     earth from '@/assets/planets/earth.png';
import      mars from '@/assets/planets/mars.png';
import asteroids from '@/assets/planets/asteroids.png';
import   jupiter from '@/assets/planets/jupiter.png';
import    saturn from '@/assets/planets/saturn.png';
import    uranus from '@/assets/planets/uranus.png';
import   neptune from '@/assets/planets/neptune.png';
import css from './SolarSystem.module.css';

export default function InnerSystem({ outer }: { outer?: boolean }) {
  const planets = outer ? [jupiter, saturn, uranus, neptune] : [mercury, venus, earth, mars];
  const sunOrAsteroids = outer ? asteroids : sun;

  const findClass = (image: string) =>
    image.match(/(sun|mercury|venus|earth|mars|asteroids|jupiter|saturn|uranus|neptune)/)![0];

  return (
    <>
      <img
        src={sunOrAsteroids}
        alt={sunOrAsteroids}
        className={css[findClass(sunOrAsteroids)]}
      />
      <section className={css.system}>
        {planets.map((planet) => (
          <img src={planet} alt={planet} key={planet} className={css[findClass(planet)]} />
        ))}
      </section>
    </>
  );
}
