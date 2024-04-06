import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SlideShow.module.css';
import MotionDiv from './UI/MotionDiv';
import { FontAwesomeBar } from './UI/FontAwesomeBar';
import SpaceShip from '../models/SpaceShip';

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
            className={css.slideshow}
            initial={{ rotate: 0, opacity: 0, x: -200, scaleY: 0 }}
            animate={{ rotate: 0, opacity: 1, x: 0, scaleY: 1 }}
            exit={{ scaleY: 0, y: -50, rotate: -45 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            onClick={() => navigate(`/ships/${array[index].id}`)}
          />
        </AnimatePresence>
      </div>

      <AnimatePresence mode='wait'>
        <MotionDiv
          element='article'
          className={css.article}
          key={index}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: [0, 0, 0.6, 0.8, 1], x: 0 },
            exit: { opacity: 0, y: 100 },
          }}
          transition={{ type: 'easeInOut', duration: 1 }}
        >
          <h2>{array[index].model}</h2>

          <div>
            <FontAwesomeBar icon='star' size={5} amount={array[index].rating} />
          </div>

          <p className={css.info}>
            <strong>{array[index].info}</strong>
          </p>

          <div className={css.progress}>
            {Object.entries(array[index].performance).map(([key, value]) => (
              <div key={key}>
                <p>{key}</p>
                <FontAwesomeBar icon='circle' size={10} amount={value} />
              </div>
            ))}
          </div>
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
};

export default SlideShow;
