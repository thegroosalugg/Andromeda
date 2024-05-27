import Clothes from '@/models/Clothes';
import css from './CartItem.module.css'

export default function CartItem(item: Clothes) {
  const { image, name, brand, price, quantity } = item;

  return (
    <article className={css.item}>
      <img src={image} alt={name} />
      <section>
        <p>{brand}</p>
        <p>{name}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </section>
    </article>
  );
}
