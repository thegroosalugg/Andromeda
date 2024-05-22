import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import css from './StoreList.module.css';
import StoreItem from './StoreItem';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function StoreList() {
  const { clothes } = useSelector((state: RootState) => state.items);
  const [activeId, setActiveId] = useState('');

  return (
    <motion.ul
      className={css.grid}
      initial='hidden'
      animate='visible'
      transition={{ staggerChildren: 0.05 }}
    >
      {clothes.map((item) => (
        <StoreItem
          key={item.id}
          item={item}        // set either new LI as active, or resets if its the same ID twice
          clickHandler={() => setActiveId(prevId => prevId === item.id ? '' : item.id)}
          activeId={activeId}
        />
      ))}
    </motion.ul>
  );
}
