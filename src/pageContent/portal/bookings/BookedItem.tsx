import useSearch from '@/hooks/useSearch';
import Booking from '@/models/Booking';
import css from './BookedItem.module.css';
import formatDate from '@/util/formatDate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal, saveItem } from '@/store/modalSlice';
import SpaceShip from '@/models/SpaceShip';

const Col = ({ label, text }: { label: string; text: string }) => {
  return (
    <div className={css.col}>
      <p style={{ color: ['Start', 'PickUp'].includes(label) ? '#87CEFA' : '#FFB6C1' }}>
        {label}
      </p>
      <p>{text}</p>
    </div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className={css.row}>{children}</div>;
};

const BookedItem = (booking: Booking) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shipId, from, till, pickup, dropoff } = booking;
  const { item: ship } = useSearch({
    search: { id: shipId, withParams: false },
    reducer: 'items',
    sliceKey: 'ships',
  });
  const { image, maker, model } = ship as SpaceShip;

  function modalHandler() {
    dispatch(saveItem({ ship, booking }));
    dispatch(openModal());
  }

  return (
    <article className={css.booking}>
      <img src={image} alt='ship' onClick={() => navigate('/ships/' + shipId)} />
      <div className={css.details} onClick={modalHandler}>
        <h6>{maker}</h6>
        <h5>{model}</h5>
        <Row>
          <Col label='Start'   text={formatDate(from)} />
          <Col label='End'     text={formatDate(till)} />
        </Row>
        <Row>
          <Col label='PickUp'  text={pickup}  />
          <Col label='DropOff' text={dropoff} />
        </Row>
      </div>
    </article>
  );
};

export default BookedItem;
