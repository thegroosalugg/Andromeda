import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout, deleteUser } from '@/store/userSlice';
import { clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useValidate from '@/hooks/useValidate';
import List from '@/components/list/List';
import Input from '@/components/form/Input';
import BookedItem from './BookedItem';
import Modal from '@/components/modal/Modal';
import EditBooking from './EditBooking';
import User from '@/models/User';
import { FormData } from '@/models/FormData';
import css from './UserPortal.module.css';
import NoBookings from './NoBookings'; // I am also not needed post testing
import { useState } from 'react';

export default function UserPortal(user: User) {
  const { id, bookings, ...userDetails } = user;
  const { item } = useSelector((state: RootState) => state.modal);
  const validate = useValidate({ update: { userId: id } });
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState(false);

  function confirmHandler() {
    setConfirmDialog((prev) => !prev);
  }

  function handleLogout() {
    window.scrollTo(0, 125);
    dispatch(logout());
    dispatch(clearForm());
  }

  return (
    <motion.section
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'easeInOut' }}
    >
      <Modal>
        <EditBooking id={id} {...item} />
      </Modal>

      <motion.section className={css.portal}>
        <div className={css.col}>
          <h2>Details</h2>
          <List className={css.user} items={Object.entries(userDetails)} keyFn={([key]) => key}>
            {([key, value]) => (
              <p>
                <span>{key}</span>
                <Input id={key as keyof FormData} savedData={value} />
              </p>
            )}
          </List>
          <button onClick={validate}>SAVE</button>
        </div>

        {bookings.length === 0 && <NoBookings />}

        <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
          {(booking) => <BookedItem {...booking} />}
        </List>
      </motion.section>

      <div className={css.actions}>
        <button onClick={handleLogout}>LOGOUT</button>
        <AnimatePresence mode='wait'>
          <motion.div
            key={'a' + confirmDialog}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            exit={{ opacity: 0, x: 100 }}
            className={css.dialog}
          >
            {!confirmDialog ? (
              <button onClick={confirmHandler}>DELETE ACCOUNT</button>
            ) : (
              <>
                <button onClick={() => dispatch(deleteUser(user.id))}>CONFIRM</button>
                <button onClick={confirmHandler} className={css.cancel}>CANCEL</button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
