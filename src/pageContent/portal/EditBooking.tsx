import formatDate from '@/util/formatDate';
import Dates from '@/components/form/Dates';
import Select from '@/components/form/Select';
import css from './EditBooking.module.css';
import useValidate from '@/hooks/useValidate';
import SpaceShip from '@/models/SpaceShip';
import Booking from '@/models/Booking';

// using ? & ! looks like a contradiction at first, but its not. This allows the Modal to properly animate out.
// It doesn't matter during this period that booking/ship are temporarily null. The issue was occuring due to both,
// UserPortal & EditBooking using useSelector. Instead only UserPortal will use it, and pass the item as a prop.
// As the modal is closed, the item (booking/ship) become null, the modal animates out, the state is re-rendered,
// the Modal isOpen becomes false and EditBooking leaves the DOM. It will enter the DOM again when the Modal receives a valid item

const EditBooking = ({ id, ship, booking }: { id: string, ship?: SpaceShip, booking?: Booking }) => {
  const { shipId, from, till, pickup, dropoff } = booking!;
  const { maker, model, image } = ship!;
  const validate = useValidate({ update: { userId: id, booking } });

  return (
    <div className={css.booking}>
      <div className={css.ship}>
        <h6>{maker}</h6>
        <h5>{model}</h5>
        <img src={image} alt='ship' />
      </div>
      <div className={css.row}>
        <div className={css.col}>
          <Dates id='from' savedData={formatDate(from, true)} bookedId={shipId} />
          <Dates id='till' savedData={formatDate(till, true)} bookedId={shipId} />
        </div>
        <div className={css.col}>
          <Select id='pickup' savedData={pickup} />
          <Select id='dropoff' savedData={dropoff} />
        </div>
      </div>
      <button onClick={validate}>UPDATE BOOKING</button>
    </div>
  );
};

export default EditBooking;
