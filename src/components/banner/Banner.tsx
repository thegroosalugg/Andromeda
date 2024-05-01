import { motion } from 'framer-motion';
import css from './Banner.module.css';

interface BannerProps {
  reverse?: boolean;
  children: string;
}

const Banner: React.FC<BannerProps> = ({ reverse, children }: BannerProps) => {
  const [scaleX, xInitial, xInView] = reverse ? [-1, '99vw', '35%'] : [1, '-99%', 0];

  return (
    <motion.div
      className={css.banner}
      initial={{ x: xInitial, scaleX, opacity: 0 }}
      whileInView={{ x: xInView, opacity: 1 }}
      transition={{ type: 'easeIn', duration: 1 }}
      viewport={{ once: true, amount: 0.01 }} // *NOTES* set amount to 1% in view in conjuction with RootLayout to stop 1st banner being in view during page transition
    >
      <motion.span
        initial={{ scaleX, y: '-100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'easeIn', duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

export default Banner;
