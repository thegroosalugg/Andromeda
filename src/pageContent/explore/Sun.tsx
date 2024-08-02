import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ExploreContext } from '@/pages/explore/ExploreContext';
import useScreen from '@/hooks/useScreen';
import sun from '@/assets/planets/sun.png';
import css from './Sun.module.css';

export default function TheSun() {
  const { isActive, activeHandler } = useContext(ExploreContext);
  const { width, height } = useScreen();
  const mobileDev = (width >= 320 && width <= 440) || (width / height > 1.8 && width < 1024);
  const size = 200 * (mobileDev ? 0.5 : 1) * (isActive === 'sun' ? 2 : 1);

  return (
    <motion.div
      className={css['sun']}
      onClick={() => activeHandler('sun')}
      whileHover={{
           borderColor: mobileDev || isActive === 'sun' ? '#00000000' : '#FFFFFF',
        borderTopColor: '#00000000',
           transition: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      <motion.img
        src={sun}
        alt='Sun'
        layout
        transition={{ duration: 1.2 }} // controls layout transition
        initial={{ width: size, scale: 0, filter: 'brightness(0)' }}
        animate={{
          width: size,
          scale: [0.5, 0.5, 1, 1],
          filter: ['brightness(0)', 'brightness(0)', 'brightness(0)', 'brightness(1)'],
          transition: { duration: 3 },
        }}
        exit={{
          filter: ['brightness(1)', 'brightness(1)', 'brightness(0)', 'brightness(0)'],
          scale: [1, 1, 0.5, 0],
          transition: { duration: 0.8 },
        }}
      />
    </motion.div>
  );
}
