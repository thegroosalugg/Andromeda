import { motion } from 'framer-motion';
import sun from '@/assets/planets/sun.png';
import css from './Sun.module.css';

export default function TheSun({ isActive, setIsActive }: { isActive: string, setIsActive: (id: string) => void }) {
  return (
    <motion.div
      className={`${css['sun']} ${isActive === 'sun' ? css['active'] : ''}`}
      onClick={() => setIsActive('sun')}
    >
      <motion.img
        src={sun}
        alt='Sun'
        layout
        transition={{ duration: 1.2 }} // controls layout transition
        initial={{ scale: 0, filter: 'brightness(0)' }}
        animate={{
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
