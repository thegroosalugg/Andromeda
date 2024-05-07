import Booking from '@/models/Booking';
import SpaceShip from '@/models/SpaceShip';
import formatDate from '@/util/formatDate';
import Dates from '@/components/form/Dates';
import Select from '@/components/form/Select';

const EditBooking = ({ spaceship, booking }: { spaceship: SpaceShip, booking: Booking }) => {
  const { maker, model} = spaceship
  const { from, till, pickup, dropoff } = booking;

  return (
    <div>
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
    </div>
  );
}

export default EditBooking;
