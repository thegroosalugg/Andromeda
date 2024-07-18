import asteroids from '@/assets/planets/asteroids.png';
import css from './Asteroids.module.css';

export default function Asteroids() {
  return (
    <div className={css['asteroids']}>
      {Array.from({ length: 7 }).map((_, index) => (
        <img key={index} src={asteroids} alt='Asteroids' />
      ))}
    </div>
  );
}
