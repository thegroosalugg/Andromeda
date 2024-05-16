import banner1 from '@/assets/clothes/banner1.jpg';
import banner2 from '@/assets/clothes/banner2.jpg';
import banner3 from '@/assets/clothes/banner3.jpg';
import css from './StoreBanner.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function StoreBanner() {
  const images = [banner1, banner2, banner3]
  const [index, setIndex] = useState(1)

  function clickHandler(index: number) {
    setIndex(prevIndex => Math.max(0, Math.min(prevIndex + index, 2)));
  }

  return (
    <div className={css.banner}>
      <button onClick={() => clickHandler(-1)}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </button>

      <img src={images[index]} alt='models' />
      <button onClick={() => clickHandler(1)}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </button>
    </div>
  );
}
