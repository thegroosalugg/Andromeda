import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import List from '@/components/list/List';
import OrderItem from './OrderItem';
import Order from '@/models/Order';
import formatDate from '@/util/formatDate';
import css from './OrderDetails.module.css';

export default function OrderDetails(order: Order) {
  const { id, items, price, date, address } = order;
  const { street, city, postcode, country } = address;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article className={css.order}>
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div className={css.items} initial={{ width: 0 }} animate={{ width: 'auto' }} exit={{ width: 0 }}>
            <List className={css.list} items={items} keyFn={({ id }) => id}>
              {(item) => <OrderItem {...item} />}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
