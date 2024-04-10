import { useScroll, useTransform, motion } from 'framer-motion';
import shipPNG from '../../assets/banner/spaceship-transparent-01.png';
import css from './ShipBanner.module.css';
import rangeArray from '../../util/rangeArray';

const ShipBanner: React.FC = () => {
  const { scrollY } = useScroll();
  const screenWidth = window.innerWidth;

  let range = rangeArray(5, 1150, 25); // scroll range on 2560px screen (max)
  // let range = rangeArray(5, 1550, 25); // 1440 px

  if (screenWidth <= 1180) {
    // range = rangeArray(5, 5300, 25); // scroll range on 320px screen (min)
    // range = rangeArray(5, 5600, 25); // 376 px
    // range = rangeArray(5, 5900, 25); // 425 px
    // range = rangeArray(5, 2400, 25); // 768 px
    range = rangeArray(5, 2000, 25); // 1024px
  }

  console.log('width', screenWidth, '\n', 'range', range);

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
