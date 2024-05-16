import banner1 from '@/assets/clothes/banner1.jpg';
import banner2 from '@/assets/clothes/banner2.jpg';
import banner3 from '@/assets/clothes/banner3.jpg';
import css from './StoreBanner.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Classes {
  0: string;
  1: string;
  2: string;
}

export default function StoreBanner() {
  const classes: Classes = { 0: 'left', 1: 'centre', 2: 'right' };
  // const x: Classes = { 0: '', 1: '', 2: '' }
  const images = [banner1, banner2, banner3];
  const leftText = ['Break the rules', 'Everybody be cool', 'The early bird'];
  const rightText = ['Ignore the machine', 'You be cool', 'captures the world'];
  const [index, setIndex] = useState(1);

  function clickHandler(index: number) {
    setIndex((prevIndex) => Math.max(0, Math.min(prevIndex + index, 2)));
  }

  return (
    <div className={css.banner}>
      <button onClick={() => clickHandler(-1)}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </button>
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={index}
          className={`${css.card} ${css[classes[index as keyof Classes]]}`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
        >
          <p>{leftText[index]}</p>
          <img src={images[index]} alt='models' />
          <p>{rightText[index]}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={() => clickHandler(1)}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </button>
    </div>
  );
}
