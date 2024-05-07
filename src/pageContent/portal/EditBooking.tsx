import Booking from '@/models/Booking';
import SpaceShip from '@/models/SpaceShip';
import formatDate from '@/util/formatDate';
import Dates from '@/components/form/Dates';
import Select from '@/components/form/Select';
import css from './EditBooking.module.css';
import useValidate from '@/hooks/useValidate';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

const EditBooking = ({ spaceship, booking }: { spaceship: SpaceShip; booking: Booking }) => {
  const { maker, model } = spaceship;
  const { from, till, pickup, dropoff } = booking;
  const { user } = useSelector((state: RootState) => state.users);
  const validate = useValidate({ update: { userId: user!.id, booking } });

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
