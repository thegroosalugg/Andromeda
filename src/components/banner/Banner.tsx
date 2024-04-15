import { motion } from 'framer-motion';
import css from './Banner.module.css';

interface BannerProps {
  reverse?: boolean;
  children: string;
}

const Banner: React.FC<BannerProps> = ({ reverse, children }: BannerProps) => {
  const scaleX = reverse ? -1 : 1;

  return (
      <motion.div
        className={css.banner}
        initial={{ x: reverse ? '100%' : '-100%', scaleX }}
        whileInView={{ x: reverse? '35%' : 0 }}
        transition={{ type: 'easeIn', duration: 1 }}
        viewport={{ once: true }}
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
