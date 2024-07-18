import sun from '@/assets/planets/sun.png';
import css from './Sun.module.css';

export default function TheSun() {
  return (
    <div className={css['sun']}>
        <img src={sun} alt='Sun' />
    </div>
  );
}
