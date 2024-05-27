import Clothes from '@/models/Clothes';
import css from './CartItem.module.css';
import CartButtons from '@/pageContent/store/list/CartButtons';

export default function CartItem(item: Clothes) {
  const { image, name, brand, price, quantity } = item;

  return (
    <article className={css.item}>
      <img src={image} alt={name} />
      <section>
        <div className={css.details}>
          <p>{brand}</p>
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <CartButtons item={item} quantity={quantity} />
      </section>
    </article>
  );
}
