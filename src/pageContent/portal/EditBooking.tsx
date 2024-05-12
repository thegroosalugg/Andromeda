import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { deleteBooking } from '@/store/userSlice';
import useValidate from '@/hooks/useValidate';
import useCloseModal from '@/hooks/useCloseModal';
import Dates from '@/components/form/Dates';
import Select from '@/components/form/Select';
import Booking from '@/models/Booking';
import SpaceShip from '@/models/SpaceShip';
import formatDate from '@/util/formatDate';
import css from './EditBooking.module.css';
import Price from '@/components/form/Price';

// using ? & ! looks like a contradiction at first, but its not. This allows the Modal to properly animate out.
// It doesn't matter during this period that booking/ship are temporarily null. The issue was occuring due to both,
// UserPortal & EditBooking using useSelector. Instead only UserPortal will use it, and pass the item as a prop.
// As the modal is closed, the item (booking/ship) becomeS null, the modal animates out, the state is re-rendered,
// the Modal isOpen becomes false and EditBooking leaves the DOM. It will enter the DOM again when the Modal receives a valid item

const EditBooking = ({ id: userId, ship, booking }: { id: string, ship?: SpaceShip, booking?: Booking }) => {
  const { id: bookingId, shipId, from, till, pickup, dropoff, price } = booking!;
  const { maker, model, image } = ship!;
  const validate = useValidate({ update: { userId, booking } });
  const dispatch = useDispatch();
  const closeModal = useCloseModal();
  const [confirmDialog, setConfirmDialog] = useState(false);

  function confirmHandler() {
    setConfirmDialog((prev) => !prev);
  }

  function deleteHandler() {
    closeModal();
    setTimeout(() => {
      dispatch(deleteBooking({ userId, bookingId }));
    }, 600);
  }

  return (
    <div className={css.booking}>
      <div className={css.ship}>
        <h6>{maker}</h6>
        <h5>{model}</h5>
        <img src={image} alt='ship' />
      </div>
      <div className={css.row}>
        <div className={css.col}>
          <p>Start</p>
          <Dates id='from' savedData={formatDate(from, true)} bookedId={shipId} />
          <p>PickUp</p>
          <Select id='pickup' savedData={pickup} />
        </div>
        <div className={css.col}>
          <p>End</p>
          <Dates id='till' savedData={formatDate(till, true)} bookedId={shipId} />
          <p>DropOff</p>
          <Select id='dropoff' savedData={dropoff} />
        </div>
      </div>
      <Price bookedId={shipId} bookedPrice={price} />
      <motion.div layout className={css.actions}>
        <button className={confirmDialog ? css.delete : css.update} onClick={confirmDialog ? deleteHandler : validate}>
          {confirmDialog ? 'CONFIRM' : 'UPDATE BOOKING'}
        </button>
        <button className={confirmDialog ? css.update : css.delete} onClick={confirmHandler}>
          {confirmDialog ? 'CANCEL' : 'DELETE BOOKING'}
        </button>
      </motion.div>
    </div>
  );
};

export default EditBooking;
