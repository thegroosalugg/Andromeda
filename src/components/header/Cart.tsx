import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/store/modalSlice';
import { RootState } from '@/store/types';
import Modal from '../modal/Modal';
import List from '../list/List';
import css from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Modal>
        <List items={items} keyFn={({ id }) => id} className={css['cart-modal']}>
          {(item) => <CartItem {...item} />}
        </List>
      </Modal>
      <div className={css['cart-header']}>
        <motion.button
          onClick={() => dispatch(toggle())}
          initial={{ y: -100, x: -20, rotate: 540 }}
          animate={{ y: [25, 0], x: 0, rotate: 0 }}
          exit={{ y: 100, rotate: 540, opacity: 0, transition: { type: 'easeOut', duration: 0.4 } }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: -400 }}
          transition={{ type: 'spring', stiffness: 50, damping: 5 }}
        >
          <FontAwesomeIcon icon={['fas', 'cart-shopping']} size='2x' />
        </motion.button>
        <motion.p
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ type: 'easeInOut', duration: 0.5 }}
        >
          ({items.reduce((total, item) => total + item.quantity, 0)})
        </motion.p>
      </div>
    </>
  );
}
