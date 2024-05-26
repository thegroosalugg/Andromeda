import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/store/modalSlice';
import { RootState } from '@/store/types';
import Modal from '../modal/Modal';
import List from '../list/List';
import css from './Cart.module.css';

export default function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Modal>
        <List items={items} keyFn={({ id }) => id} className={css.cart}>
          {(item) => <p>{item.name}</p>}
        </List>
      </Modal>
      <motion.button
        className={css['cart-button']}
        onClick={() => dispatch(toggle())}
        initial={{ y: -100, x: -20, rotate: 540 }}
        animate={{ y: [25, 0], x: 0, rotate: 0 }}
        exit={{ y: 100, rotate: 540, opacity: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, rotate: -400 }}
        transition={{ type: 'spring', stiffness: 50, damping: 5 }}
      >
        <FontAwesomeIcon icon={['fas', 'cart-shopping']} size='2x' />
      </motion.button>
    </>
  );
}
