import { motion } from 'framer-motion';
import CartButtons from '@/pageContent/store/list/CartButtons';
import Clothes from '@/models/Clothes';
import css from './CartItem.module.css';

export default function CartItem(item: Clothes) {
  const { image, name, brand, price, quantity } = item;

  return (
    <article className={css.item}>
      <img src={image} alt={name} />
      <section>
        <div className={css.details}>
          <h4>{brand}</h4>
          <h5>{name}</h5>
          <motion.h3 key={quantity} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}>
            ${(+price * quantity).toFixed(2)}
          </motion.h3>
        </div>
        <CartButtons item={item} quantity={quantity} />
      </section>
    </article>
  );
}
