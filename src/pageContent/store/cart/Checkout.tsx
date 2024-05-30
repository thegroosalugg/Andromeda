import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Modal from '@/components/modal/Modal';
import List from '@/components/list/List';
import CartItem from './CartItem';
import OpenCart from './OpenCart';
import Form from '@/components/form/Form';
import css from './Checkout.module.css';

export default function Checkout() {
  const { items } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.users);
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsReady(false);
    }
  }, [isOpen]);

  return (
    <>
      <Modal>
        <motion.div layout className={css.cart}>
          <h2>Your Cart</h2>
          {!isReady && (
            <>
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
              <button
                className={css.checkout}
                onClick={() => setIsReady(true)}
                disabled={items.length === 0}
              >
                CHECKOUT
              </button>
            </>
          )}
          {isReady && !user && <Form />}
          {isReady && user && <p style={{ color: 'white' }}>Order Confirmed</p>}
        </motion.div>
      </Modal>
      <OpenCart items={items} />
    </>
  );
}
