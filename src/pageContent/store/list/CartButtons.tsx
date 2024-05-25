import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '@/store/cartSlice';
import { RootState } from '@/store/types';
import Clothes from '@/models/Clothes';
import css from './CartButtons.module.css';

export default function CartButtons({ item }: { item: Clothes }) {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const CartButton = ({ action }: { action: 'plus' | 'minus' }) => {
    const quantity = action === 'plus' ? 1 : -1;

    return (
      <motion.button
        onClick={() => dispatch(updateCart({ item, quantity }))}
        whileHover={{ scale: 1.2, borderColor: '#fffdfd' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <FontAwesomeIcon icon={['fas', action]} />
      </motion.button>
    );
  };

  console.log('CART', items); // Log & Clear

  return (
    <div className={css['cart-actions']}>
      <CartButton action='minus' />
      <p>
        Add to Cart <FontAwesomeIcon icon={['fas', 'cart-shopping']} />
      </p>
      <CartButton action='plus' />
    </div>
  );
}
