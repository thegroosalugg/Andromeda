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

  // if (height <= 1180) {
  //   multiplier = 5
  // }

  const range = rangeArray(5, 1500, 25);

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


// Logs

// RESPONSIVE VIEW
// screen {width: 320, height: 387}
//  range (5) [1500, 1525, 1550, 1575, 1600]

// screen {width: 375, height: 387}
//  range (5) [1500, 1525, 1550, 1575, 1600]

// screen {width: 426, height: 387}
//  range (5) [1500, 1525, 1550, 1575, 1600]

// screen {width: 768, height: 387}
//  range (5) [1500, 1525, 1550, 1575, 1600]

// screen {width: 1024, height: 387}
//  range (5) [1500, 1525, 1550, 1575, 1600]

// screen {width: 1440, height: 387}
//  range (5) [1100, 1125, 1150, 1175, 1200]

// screen {width: 2560, height: 704}
//  range (5) [1100, 1125, 1150, 1175, 1200]

// DESKTOP VIEW
// screen {width: 1536, height: 695}
//  range (5) [1100, 1125, 1150, 1175, 1200]

// screen {width: 1024, height: 463}
//  range (5) [1500, 1525, 1550, 1575, 1600]

// screen {width: 877, height: 397}
//  range (5) [1500, 1525, 1550, 1575, 1600]

