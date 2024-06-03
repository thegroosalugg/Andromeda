import { useState } from 'react';
import List from '@/components/list/List';
import Order from '@/models/Order';
import formatDate from '@/util/formatDate';
import css from './OrderDetails.module.css';

export default function OrderDetails(order: Order) {
  const { id, items, price, date, address } = order;
  const { street, city, postcode, country } = address;
  const [isExpanded, setIsExpanded] = useState(false);

  const Wrapper = ({ bottom, children }: { bottom?: boolean; children: React.ReactNode }) => {
    return (
      <div
        className={css[bottom ? 'bottom' : 'top']}
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        {children}
      </div>
    );
  };

  return (
    <article className={css.order}>
      <Wrapper>
        <h3>{id}</h3>
        <h4 style={{ marginBottom: isExpanded ? '1rem' : ''}}>{formatDate(date, true)}</h4>
      </Wrapper>
      {isExpanded && (
        <List className={css.items} items={items} keyFn={({ id }) => id}>
          {(item) => <p>{item.name}</p>}
        </List>
      )}
      <Wrapper bottom>
        <p style={{ marginTop: isExpanded ? '1rem' : ''}}>{street}</p>
        <p>{city}</p>
        <p>
          {postcode}, {country}
        </p>
        <h4>${price}</h4>
      </Wrapper>
    </article>
  );
}
