import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '@/store/activeSlice';
import { RootState } from '@/store/types';
import sun from '@/assets/planets/sun.png';
import css from './Sun.module.css';

export default function TheSun() {
  const { components } = useSelector((state: RootState) => state.active);
  const isActive = components.length === 1 && components[0] === 'sun';
  const dispatch = useDispatch();

  return (
    <div
      className={`${css['sun']} ${isActive ? css['active'] : ''}`}
      onClick={() => dispatch(setActive('sun'))}
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
    </div>
  );
}
