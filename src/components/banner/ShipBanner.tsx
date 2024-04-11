import { motion } from 'framer-motion';
import ship1 from '../../assets/banner/spaceship-transparent-01.png';
import ship2 from '../../assets/banner/spaceship-transparent-02.png';
import css from './ShipBanner.module.css';

const ShipBanner: React.FC<{ reverse?: boolean }> = ({ reverse }) => {
  
  return (
    <div className={css.banner}>
      <motion.img
        src={reverse ? ship2 : ship1}
        alt='spaceship'
        initial={{ x: reverse ? '-100%' : '100vw' }}
        whileInView={{ x: reverse ? '100vw' : '-100%' }}
        transition={{ type: 'easeIn', duration: 2.5 }}
        // viewport={{ once: true }}
      />
    </div>
  );
};

export default ShipBanner;
