import { motion } from 'framer-motion';
import ship1 from '../../assets/banner/spaceship-transparent-01.png';
import ship2 from '../../assets/banner/spaceship-transparent-02.png';
import css from './ShipBanner.module.css';

const ShipBanner: React.FC<{ reverse?: boolean }> = ({ reverse }) => {
  const x = reverse ? '-' : '';

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
      <motion.div
        className={css.banner}
        initial={{ x: `${x}100%` }}
        whileInView={{ x: reverse ? '50vw' : '12vw' }}
        transition={{ type: 'easeIn', duration: 1.5 }}
        viewport={{ once: true }}
      >
        {reverse && smoke}
        <img src={reverse ? ship2 : ship1} alt='spaceship' />
        {!reverse && smoke}
      </motion.div>
    </div>
  );
};

export default ShipBanner;
