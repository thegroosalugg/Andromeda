import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import css from './StoreList.module.css';
import StoreItem from './StoreItem';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function StoreList() {
  const { clothes } = useSelector((state: RootState) => state.items);
  const [activeId, setActiveId] = useState<string | undefined>();

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
          item={item}
          clickHandler={() => setActiveId(item.id)}
          activeId={activeId}
        />
      ))}
    </motion.ul>
  );
}
