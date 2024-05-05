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

  const Col = ({ color, label, text }: { color: string; label: string; text: string }) => {
    return (
      <div className={css.col}>
        <p style={{ color }}>{label}</p>
        <p>{text}</p>
      </div>
    );
  };

  const Row = ({children}: {children: React.ReactNode}) => {
    return <div className={css.row}>{children}</div>;
  };

  return (
    <article className={css.booking}>
      <img src={ship!.image} alt='ship' />
      <div className={css.details}>
        <h6>{ship!.maker}</h6>
        <h5>{ship!.model}</h5>
        <Row>
          <Col label='start' color='#bb6412d0' text={formatDate(from)} />
          <Col label='end' color='#bb11a1bf' text={formatDate(till)} />
        </Row>
        <Row>
          <Col label='PickUp' color='#bb6412d0' text={pickup} />
          <Col label='DropOff' color='#bb11a1bf' text={dropoff} />
        </Row>
      </div>
    </article>
  );
};

export default BookedItem;
