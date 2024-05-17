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
  const images = [banner1, banner2, banner3];
  const leftText = ['Break the rules', 'Everybody be cool', 'The early bird'];
  const rightText = ['Ignore the machine', 'You be cool', 'captures the world'];
  const [state, setState] = useState({ index: 1, direction: 1 });

  function clickHandler(direction: number) {
    setState((prevState) => ({
      index: Math.max(0, Math.min(prevState.index + direction, 2)),
      direction,
    }));
  }

  let initial, exit;

  if (state.direction === 1) {
    if (state.index === 0) {
      [initial, exit] = ['100%', '-100%'];
    } else if (state.index === 1) {
      [initial, exit] = ['100%', '-100%'];
    } else if (state.index === 2) {
      [initial, exit] = ['-100%', '100%'];
    }
  } else if (state.direction === -1) {
    if (state.index === 0) {
      [initial, exit] = ['100%', '-100%'];
    } else if (state.index === 1) {
      [initial, exit] = ['-100%', '100%'];
    } else if (state.index === 2) {
      [initial, exit] = ['100%', '100%'];
    }
  }

  console.log('initial', initial, '\n', 'exit', exit, '\n', state);

  return (
    <div className={css.banner}>
      <button onClick={() => clickHandler(-1)}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </button>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          // key={`${state.index}-${state.direction}`}
          key={state.index}
          className={`${css.card} ${css[classes[state.index as keyof Classes]]}`}
          initial={{ opacity: 0, x: initial }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: exit }}
          transition={{ type: 'tween', ease: 'linear', duration: 1 }}
        >
          <p>{leftText[state.index]}</p>
          <img src={images[state.index]} alt='models' />
          <p>{rightText[state.index]}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={() => clickHandler(1)}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </button>
    </div>
  );
}
