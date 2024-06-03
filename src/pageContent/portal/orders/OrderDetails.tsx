import { useState } from 'react';
import { motion } from 'framer-motion';
import List from '@/components/list/List';
import Order from '@/models/Order';
import formatDate from '@/util/formatDate';
import css from './OrderDetails.module.css';

export default function OrderDetails(order: Order) {
  const { id, items, price, date, address } = order;
  const { street, city, postcode, country } = address;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article layout className={css.order} animate={{ width: 'auto' }}>
      <div className={css.details} onClick={() => setIsExpanded((prevState) => !prevState)}>
        <h3>{id}</h3>
        <h4>{formatDate(date, true)}</h4>
        <p>{street}</p>
        <p>{city}</p>
        <p>
          {postcode}, {country}
        </p>
        <h4>${price}</h4>
      </div>
      {isExpanded && (
        <List className={css.items} items={items} keyFn={({ id }) => id}>
          {(item) => <p>{item.name}</p>}
        </List>
      )}
    </motion.article>
  );
}
