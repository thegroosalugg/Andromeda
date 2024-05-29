import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Modal from '@/components/modal/Modal';
import List from '@/components/list/List';
import CartItem from './CartItem';
import css from './Cart.module.css';
import OpenCart from './OpenCart';

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Modal>
        <motion.div layout className={css.cart}>
          <h2>Your Cart</h2>
          {items.length === 0 && (
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
              className={css.list}
              style={{ height: 'auto' }}
            >
              Your Cart is Empty
            </motion.p>
          )}
          <List items={items} keyFn={({ id }) => id} className={css.list}>
            {(item) => <CartItem {...item} />}
          </List>
          <button className={css.checkout} onClick={() => console.log('click')} disabled={items.length === 0}>
            CHECKOUT
          </button>
        </motion.div>
      </Modal>
      <OpenCart items={items} />
    </>
  );
}
