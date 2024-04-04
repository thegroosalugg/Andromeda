import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ShowProps {
  array: { image: string }[];
  className: string;
  variants?: { hidden: object; visible: object };
  transition?: object;
}

const SlideShow: React.FC<ShowProps> = ({
  array,
  className,
  variants,
  transition,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % array.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [array.length]);

  return (
    <motion.img
      src={array[currentImage].image}
      alt={array[currentImage].image}
      className={className}
      variants={variants}
      transition={transition}
      initial='hidden'
      animate='visible'
    />
  );
};

export default SlideShow;
