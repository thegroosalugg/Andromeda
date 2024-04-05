import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SlideShow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MotionDiv from './UI/MotionDiv';

interface ShowProps {
  array: { image: string; id: string }[];
  variants?: { hidden: object; visible: object; exit: object };
  transition?: object;
}

const SlideShow: React.FC<ShowProps> = ({ array, variants, transition }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % array.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [array.length]);

  return (
    <div className={css['slides-container']}>
      <div className={css['picture-frame']}>
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentImage}
            src={array[currentImage].image}
            alt={array[currentImage].image}
            className={css.slideshow}
            variants={variants}
            transition={transition}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={() => navigate(`/ships/${array[currentImage].id}`)}
          />
        </AnimatePresence>
      </div>
      <AnimatePresence mode='wait'>
        <motion.article
          // element='article'
          layout
          className={css.article}
          key={currentImage}
          // variants={{
          //   hidden: { opacity: 0, scaleX: 0, y: -100 },
          //   visible: { opacity: 1, scaleX: 1, y: 0 },
          //   exit: { opacity: 0, scaleX: 0 },
          // }}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: [0, 0, 0.6, 0.8, 1], x: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'easeInOut', duration: 1 }}
        >
          <h2>{array[currentImage].model}</h2>
          <p>
            <strong>{array[currentImage].info}</strong>
          </p>
          <div>
            {Object.entries(array[currentImage].performance).map(
              ([key, value], index) => (
                <p key={index}>
                  {key}: {value}
                </p>
              )
            )}
          </div>
          <div>
            {[...Array(5)].map((_, index) => {
              const rating = index + 1;
              return (
                <FontAwesomeIcon
                  key={index}
                  icon={[
                    rating <= array[currentImage].rating ? 'fas' : 'far',
                    'star',
                  ]}
                />
              );
            })}
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
};

export default SlideShow;
