import Clothes from '@/models/Clothes';
import css from './StoreItem.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function StoreItem(item: Clothes) {
  const { name, brand, image, price } = item;
  const [isActive, setIsActive] = useState(false);

  function clickHandler() {
    setIsActive(prevState => !prevState);
  }

  return (
    <motion.article className={css.item} initial={{ scale: 0.5 }} animate={{ scale: isActive ? 2 : 1 }}>
      <img src={image} alt='clothes' onClick={clickHandler} />
      <div className={css.details}>
        <h4>{brand}</h4>
        <h5>{name}</h5>
        <h3>${price}</h3>
      </div>
    </motion.article>
  );
}
