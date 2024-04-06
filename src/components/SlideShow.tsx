import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SlideShow.module.css';
import SpaceShip from '../models/SpaceShip';
import SlidesInfoCard from './spaceships/cards/SlidesInfoCard';

interface ShowProps {
  array: SpaceShip[];
}

const SlideShow: React.FC<ShowProps> = ({ array }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [array.length]);

  return (
    <div className={css['slides-container']}>

      <div className={css['picture-frame']}>
        <AnimatePresence mode='wait'>
          <motion.img
            key={index}
            src={array[index].image}
            alt={array[index].model}
            className={css['slideshow']}
            initial={{ rotate: 0, opacity: 0, x: -200, scaleY: 0 }}
            animate={{ rotate: 0, opacity: 1, x: 0, scaleY: 1 }}
            exit={{ scaleY: 0, y: -50, rotate: -45 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            onClick={() => navigate(`/ships/${array[index].id}`)}
          />
        </AnimatePresence>
      </div>

      <AnimatePresence mode='wait'>
        <SlidesInfoCard key={index} {...array[index]} />
      </AnimatePresence>

    </div>
  );
};

export default SlideShow;
