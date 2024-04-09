import { useScroll, useTransform, motion } from 'framer-motion';
import shipPNG from '../../assets/banner/spaceship-transparent-01.png';
import css from './ShipBanner.module.css';

const ShipBanner: React.FC = () => {
  const { scrollY } = useScroll();
  // const screenWidth = window.innerWidth;
  // let range = [0, 300, 350, 450, 500, 550];

  // if (screenWidth <= 1180) {
  //   range = [0, 700, 800, 900, 1000, 1100]
  // }

  const x = useTransform(
    scrollY,
    [0, 1000, 1100, 1200, 1300],
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
    <motion.div className={css.banner} style={{ x }}>
      <img src={shipPNG} alt='spaceship' />
      {smoke}
    </motion.div>
  );
};

export default ShipBanner;
