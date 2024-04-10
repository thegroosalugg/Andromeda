import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import shipPNG from '../../assets/banner/spaceship-transparent-01.png';
import css from './ShipBanner.module.css';
import rangeArray from '../../util/rangeArray';

const ShipBanner: React.FC = () => {
  const { scrollY } = useScroll();
  const [screen, setScreen] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      console.clear() // clear the console
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const range = rangeArray(5, screen.width >= 1100 ? 1300 : 1450, 25);

  console.log('screen', screen, '\n', 'range', range);

  const x = useTransform(
    scrollY,
    [...range],
    ['100vw', '75vw', '50vw', '25vw', '12vw']
  );

  // chemtrail size
  const smoke = Array.from({ length: 20 }).map((_, index) => (
    <div
      key={index}
      className={css.smoke}
      style={{
        left: `${Math.random() * 100}px`,
        top: `${Math.random() * 50}px`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <div className={css.overflow}>
      <motion.div className={css.banner} style={{ x }}>
        <img src={shipPNG} alt='spaceship' />
        {smoke}
      </motion.div>
    </div>
  );
};

export default ShipBanner;
