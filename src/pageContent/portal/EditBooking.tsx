import formatDate from '@/util/formatDate';
import Dates from '@/components/form/Dates';
import Select from '@/components/form/Select';
import css from './EditBooking.module.css';
import useValidate from '@/hooks/useValidate';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import SpaceShip from '@/models/SpaceShip';
import Booking from '@/models/Booking';

const EditBooking = ({ id }: { id: string }) => {
  const { ship, booking } = useSelector((state: RootState) => state.modal.item as { ship: SpaceShip; booking: Booking });
  const { from, till, pickup, dropoff } = booking;
  const { maker, model } = ship;
  const validate = useValidate({ update: { userId: id, booking } });

  return (
    <div className={css.booking}>
      <h6>{maker}</h6>
      <h5>{model}</h5>
      <div>
        <div>
          <Dates id='from' savedData={formatDate(from, true)} />
          <Dates id='till' savedData={formatDate(till, true)} />
        </div>
        <div>
          <Select id='pickup' savedData={pickup} />
          <Select id='dropoff' savedData={dropoff} />
        </div>
      </div>
      <button onClick={validate}>UPDATE BOOKING</button>
    </div>
  );
};

export default EditBooking;
