import useSearch from '@/hooks/useSearch';
import Booking from '@/models/Booking';
import css from './BookedItem.module.css';
import formatDate from '@/util/formatDate';

const BookedItem = (booking: Booking) => {
  const { shipId, from, till, pickup, dropoff } = booking;
  const { item: ship } = useSearch({
    search: { id: shipId, withParams: false },
    reducer: 'ships',
    sliceKey: 'ships',
  });

  return (
    <article className={css.booking}>
      <img src={ship!.image} alt='ship' />
      <div className={css.details}>
        <h6>{ship!.maker}</h6>
        <h5>{ship!.model}</h5>
        <div className={css.row}>
          <div className={css.col}>
            <p style={{ color: '#bb6412d0'}}>start</p>
            <p>{formatDate(from)}</p>
          </div>
          <div className={css.col}>
            <p style={{ color: '#bb11a1bf'}}>end</p>
            <p>{formatDate(till)}</p>
          </div>
        </div>
        <div className={css.row}>
          <div className={css.col}>
            <p style={{ color: '#bb6412d0'}}>PickUp</p>
            <p>{pickup}</p>
          </div>
          <div className={css.col}>
            <p style={{ color: '#bb11a1bf'}}>DropOff</p>
            <p>{dropoff}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookedItem;
