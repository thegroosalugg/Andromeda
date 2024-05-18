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

const classes: Classes = { 0: 'left', 1: 'centre', 2: 'right' };
const images = [banner1, banner2, banner3];
const leftText = ['Break the rules', 'Everybody be cool', 'The early bird'];
const rightText = ['Ignore the machine', 'You be cool', 'captures the world'];
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const StoreBanner = () => {
  const [[index, direction], setIndex] = useState([1, 0]);

  const clickHandler = (newDirection: number) => {
    if (index + newDirection >= 0 && index + newDirection <= 2) {
      setIndex([index + newDirection, newDirection]);
    }
  };

  return (
    <div className={css.banner}>
      <button onClick={() => clickHandler(-1)} className={direction === -1 ? css.selected : ''}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </button>
      <AnimatePresence custom={direction} initial={false} mode='wait'>
        <motion.div
          key={index}
          className={`${css.card} ${css[classes[index as keyof Classes]]}`}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ type: 'easeInOut' }}
        >
          <p>{leftText[index]}</p>
          <img src={images[index]} alt='models' />
          <p>{rightText[index]}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={() => clickHandler(1)} className={direction === 1 ? css.selected : ''}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </button>
    </div>
  );
};

export default StoreBanner;
