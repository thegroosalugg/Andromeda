import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import css from './SlideShow.module.css';
import SlidesInfoCard from './SlidesInfoCard';
import useRepeatAnimation from '@/hooks/useRepeatAnimation';

const SlideShow = () => {
  const { ships } = useSelector((state: RootState) => state.items);
  const navigate = useNavigate();
  const index = useRepeatAnimation({
    initialState: 0,
    stateUpdateFn: (prevIndex) => (prevIndex + 1) % ships.length,
    fixedInterval: 8,
  });

  const handleClick = () => {
    window.scrollTo(0, 125); // Scroll to the top of the page before navigating
    navigate(`/ships/${ships[index].id}`);
  };

  return (
    <div className={css['slides-container']}>
      <div className={css['slideshow']}>
        <AnimatePresence mode='wait'>
          <motion.img
            key={index}
            src={ships[index].image}
            alt={ships[index].model}
            initial={{ rotate: -45, opacity: 0, x: -200 }}
            animate={{ rotate:   0, opacity: 1, x:    0 }}
               exit={{ rotate:  45, opacity: 0, x:  200 }}
         transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
            onClick={handleClick}
          />
        </AnimatePresence>
      </div>
      <AnimatePresence mode='wait'>
        <SlidesInfoCard key={index} {...ships[index]} />
      </AnimatePresence>
    </div>
  );
};

export default SlideShow;
