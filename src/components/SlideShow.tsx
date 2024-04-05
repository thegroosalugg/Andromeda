import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SlideShow.module.css';
import MotionDiv from './UI/MotionDiv';
import { FontAwesomeBar } from './UI/FontAwesomeBar';

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
        <MotionDiv
          element='article'
          className={css.article}
          key={currentImage}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: [0, 0, 0.6, 0.8, 1], x: 0 },
            exit: { opacity: 0, y: 100 },
          }}
          transition={{ type: 'easeInOut', duration: 1 }}
        >
          <h2>{array[currentImage].model}</h2>

          <div>
            <FontAwesomeBar
              icon='star'
              size={5}
              amount={array[currentImage].rating}
            />
          </div>

          <p className={css.info}>
            <strong>{array[currentImage].info}</strong>
          </p>

          <div className={css.progress}>
            {Object.entries(array[currentImage].performance).map(
              ([key, value]) => (
                <div key={key}>
                  <p>{key}</p>
                  <FontAwesomeBar icon='circle' size={10} amount={value as number} />
                </div>
              )
            )}
          </div>
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
};

export default SlideShow;
