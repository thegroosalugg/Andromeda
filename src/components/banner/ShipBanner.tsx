import { useScroll, useTransform, motion } from 'framer-motion';
import shipPNG from '../../assets/banner/spaceship-transparent-01.png';
import css from './ShipBanner.module.css';

const ShipBanner: React.FC = () => {
  const { scrollY } = useScroll();
  // const screenWidth = window.innerWidth;

  const takeOff = 1200; // starting range
  let i = 1; // multiplier
  const range = [takeOff, takeOff + 50 * i++, takeOff + 50 * i++, takeOff + 50 * i++, takeOff + 50 * i++]; // adds an extra 50 to each prev val
  console.log(range)

  // if (screenWidth <= 1180) {
  //   range = [0, 1100, 1150, 1200, 1250]
  // }

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
    <motion.div className={css.banner} style={{ x }}>
      <img src={shipPNG} alt='spaceship' />
      {smoke}
    </motion.div>
  );
};

export default ShipBanner;
