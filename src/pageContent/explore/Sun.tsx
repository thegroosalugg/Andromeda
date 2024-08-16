import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import sun from '@/assets/planets/sun.png';
import css from './Sun.module.css';

export default function TheSun() {
  const { activeFC, activeHandler, isMobile, isLandscape } = useContext(ExploreContext);
  const isActive = activeFC === 'sun';
  const isCondensedView = isMobile && !isLandscape && !isActive;
  const size = 200 * (isMobile ? 0.5 : 1) * (isActive ? 2 : 1);

  return (
    <motion.div
      className={css['sun']}
      onClick={() => activeHandler('sun')}
      whileHover={{
           borderColor: isMobile || isActive ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
            transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      style={{
                 flex: isCondensedView ? '0.5 1 10%' : '1 1 10%',
        paddingBottom: isCondensedView ? 0 : '',
      }}
    >
      <motion.img
        src={sun}
        alt='Sun'
        layout
        transition={{ layout: { duration: 1.2 } }}
        style={{ width: size }}
        initial={{ scale: 0, filter: 'brightness(0)' }}
        animate={{
               scale: isActive ? [1, 1.2] : 1,
              filter: ['brightness(0)', 'brightness(0)', 'brightness(1)'],
          transition: isActive
            ? { duration: 1.5, delay: 2, repeat: Infinity, repeatType: 'mirror' }
            : { duration: 3, type: 'tween' },
        }}

        exit={{
              filter: 'brightness(0)',
               scale: 0,
          transition: { duration: 0.5 },
        }}
      />
    </motion.div>
  );
}
