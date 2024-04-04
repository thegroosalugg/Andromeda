import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SlideShow.module.css'

interface ShowProps {
  array: { image: string; id: string }[];
  variants?: { hidden: object; visible: object; exit: object };
  transition?: object;
}

const SlideShow: React.FC<ShowProps> = ({
  array,
  variants,
  transition,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % array.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [array.length]);

  return (
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
  );
};

export default SlideShow;
