import Clothes from '@/models/Clothes';
import css from './StoreItem.module.css';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface StoreProps {
  item: Clothes;
  clickHandler: () => void;
  activeId: string | undefined;
}

export default function StoreItem({ item, clickHandler, activeId }: StoreProps) {
  const { id, name, brand, image, price } = item;
  const isActive = activeId === id;
  const scrollRef = useRef<HTMLLIElement | null>(null);
  console.log('RENDERING ID', id); // Log & Clear

  useEffect(() => {
    if (isActive && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isActive]);

  return (
    <motion.li
      ref={scrollRef}
      className={`${css.item} ${isActive ? css.expanded : ''}`}
      layout
      variants={{
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
      }}
    >
      <img src={image} alt='clothes' onClick={clickHandler} />
      <div className={css.details}>
        <h4>{brand}</h4>
        <h5>{name}</h5>
        <h3>${price}</h3>
      </div>
    </motion.li>
  );
}
