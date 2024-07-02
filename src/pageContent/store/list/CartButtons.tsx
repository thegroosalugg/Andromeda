import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { updateCart } from '@/store/cartSlice';
import Clothes from '@/models/Clothes';
import css from './CartButtons.module.css';

export default function CartButtons({ item, quantity }: { item: Clothes; quantity?: number }) {
  const dispatch = useDispatch();

  const CartButton = ({ action }: { action: 'plus' | 'minus' }) => {
    const amount = action === 'plus' ? 1 : -1;

    return (
      <motion.button
        onClick={() => dispatch(updateCart({ item, amount }))}
        whileHover={{ scale: 1.2, borderColor: '#fffdfd' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <FontAwesomeIcon icon={['fas', action]} />
      </motion.button>
    );
  };

  return (
    <div className={css['cart-actions']}>
      <CartButton action='minus' />
      <motion.p
        key={quantity}
        style={{ width: quantity && '0.8rem' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
      >
        {quantity ? (
          quantity
        ) : (
          <>
            Add to Cart <FontAwesomeIcon icon={['fas', 'cart-shopping']} />
          </>
        )}
      </motion.p>
      <CartButton action='plus' />
    </div>
  );
}
