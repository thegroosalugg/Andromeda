import Clothes from '@/models/Clothes';
import css from './StoreItem.module.css';
import { AnimatePresence, motion } from 'framer-motion';

interface StoreProps {
  item: Clothes;
  clickHandler: () => void;
  activeId: string | undefined;
}

export default function StoreItem({ item, clickHandler, activeId }: StoreProps) {
  const { id, name, brand, image, price } = item;
  const isActive = activeId === id;
  console.log('RENDERING ID', id);

  return (
    <motion.article
      className={css.item}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1, height: 'auto' }}
    >
      <img src={image} alt='clothes' onClick={clickHandler} />
      <div className={css.details}>
        <h4>{brand}</h4>
        <h5>{name}</h5>
        <h3>${price}</h3>
      </div>
      <AnimatePresence mode='sync'>
        {isActive && (
          <motion.div
            layoutId='store-item'
            initial={{ height: 0 }}
            animate={{ height: '100px' }}
            exit={{ height: 0, transition: { delay: 0.5 } }}
            transition={{ duration: 0.5, type: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
}
