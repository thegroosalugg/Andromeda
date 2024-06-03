import Order from '@/models/Order';
import css from './OrderDetails.module.css';
import List from '@/components/list/List';

export default function OrderDetails(order: Order) {
  const { items, price, address } = order;

  return (
    <List className={css.order} items={items} keyFn={({ id }) => id}>
      {(item) => <p>{item.name}</p>}
    </List>
  );
}
