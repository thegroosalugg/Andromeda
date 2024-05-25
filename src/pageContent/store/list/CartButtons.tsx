import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './CartButtons.module.css';

const CartButton = ({ action }: { action: 'plus' | 'minus' }) => {
  return (
    <button>
      <FontAwesomeIcon icon={['fas', action]} />
    </button>
  );
};

export default function CartButtons() {
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
