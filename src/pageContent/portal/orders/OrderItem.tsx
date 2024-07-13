import Clothes from '@/models/Clothes';
import css from './OrderItem.module.css';

export default function OrderItem(clothes: Clothes) {
  const { name, brand, image, price, quantity } = clothes;

  return (
    <article className={css.article}>
      <img src={image} alt={name} />
      <section>
        <h6>{brand}</h6>
        <h6>{name}</h6>
        <p>
          <span>{' x ' + quantity}</span>
          <span>${(+price * quantity).toFixed(2)}</span>
        </p>
      </section>
    </article>
  );
}
