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
    <motion.li
      className={`${css.item} ${isActive ? css.expanded : ''}`}
      // className={css.item}
      // style={isActive ? { gridColumn: '1 / -1' } : {}}
      variants={{
        hidden: { scale: 0.5, opacity: 0, width: 0 },
        visible: { scale: 1, opacity: 1, width: 'auto' },
      }}
    >
      <section>
        <img src={image} alt='clothes' onClick={clickHandler} />
        <div className={css.details}>
          <h4>{brand}</h4>
          <h5>{name}</h5>
          <h3>${price}</h3>
        </div>
        <AnimatePresence mode='popLayout'>
          {isActive && (
            <motion.div
              // layoutId='store-item'
              initial={{ height: 0 }}
              animate={{ height: '100px' }}
              exit={{ height: 0, transition: { delay: 0.5 } }}
              transition={{ duration: 0.5, type: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
      </section>
      <AnimatePresence mode='popLayout'>
        {isActive && (
          <motion.div
            // layoutId='store-item'
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0, transition: { delay: 0.5 } }}
            transition={{ duration: 1, type: 'easeInOut' }}
          >
            <p>HELLO</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
