import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/userSlice';
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

export default function UserPortal(user: User) {
  const { id, bookings, ...userDetails } = user;
  const { item } = useSelector((state: RootState) => state.modal);
  const validate = useValidate({ update: { userId: id } });
  const dispatch = useDispatch();

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
      <section className={css.portal}>
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
        <AnimatePresence>
          {bookings.length > 0 && (
            <>
              <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
                {(booking) => <BookedItem {...booking} />}
              </List>
              <Modal>
                <EditBooking id={id} {...item} />
              </Modal>
            </>
          )}
        </AnimatePresence>
      </section>
      <button className={css.logout} onClick={handleLogout}>
        LOGOUT
      </button>
    </motion.section>
  );
}
