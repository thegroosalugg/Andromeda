import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './CartButtons.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Clothes from '@/models/Clothes';
import { addItem } from '@/store/cartSlice';

export default function CartButtons({ item }: { item: Clothes }) {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const CartButton = ({ action }: { action: 'plus' | 'minus' }) => {
    return (
      <button onClick={() => dispatch(addItem(item))}>
        <FontAwesomeIcon icon={['fas', action]} />
      </button>
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
