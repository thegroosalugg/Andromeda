import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setActive } from '@/store/activeSlice';
import sun from '@/assets/planets/sun.png';
import css from './Sun.module.css';

export default function TheSun() {
  const dispatch = useDispatch();

  return (
    <div className={css['sun']} onClick={() => dispatch(setActive('sun'))}>
      <motion.img
        src={sun}
        alt='Sun'
        initial={{ scale: 0, filter: 'brightness(0)' }}
        animate={{
          scale: [0.5, 0.5, 1, 1],
          filter: ['brightness(0)', 'brightness(0)', 'brightness(0)', 'brightness(1)'],
          transition: { duration: 1.5 },
        }}
      />
    </div>
  );
}
