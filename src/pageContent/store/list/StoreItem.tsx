import Clothes from '@/models/Clothes';
import css from './StoreItem.module.css';

export default function StoreItem(item: Clothes) {
  const { name, brand, image, price } = item;

  return (
    <article className={css.item}>
      <img src={image} alt='clothes' />
      <h4>{brand}</h4>
      <h5>{name}</h5>
      <h3>${price}</h3>
    </article>
  );
}
