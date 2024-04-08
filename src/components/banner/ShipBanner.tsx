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
    ['100vw', '75vw', '50vw', '25vw', '12vw' ]
  );

  return (
      <motion.img
        src={shipPNG}
        alt='spaceship'
        className={css.banner}
        style={{ x }}
      />
  );
};

export default ShipBanner;
