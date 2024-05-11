import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout, deleteUser, addBooking } from '@/store/userSlice';
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
import Booking from '@/models/Booking';

function NoBookins() {
  const styles = {
    width: '25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  };

  return (
    <motion.div
      style={styles}
      className={css.bookings}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
    >
      <motion.p
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1, transition: { delay: 1.5 } }}
      >
        You have no bookings
      </motion.p>
    </motion.div>
  );
}

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

        {bookings.length === 0 && <NoBookins />}

        <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
          {(booking) => (booking ? <BookedItem {...booking} /> : <p>NO BOOKINGS</p>)}
        </List>

      </motion.section>

      <button className={css.logout} onClick={handleLogout}>
        LOGOUT
      </button>
      <button className={css.logout} onClick={() => dispatch(deleteUser(user.id))}>
        DELETE ACCOUNT
      </button>

      {/* DELETE ME AFTER TESTING */}
      <button
        onClick={() =>
          dispatch(
            addBooking({
              currentUser: user,
              booking: new Booking(
                'SP90532',
                '2024-05-10T22:49:49.340Z',
                '2024-05-10T22:49:51.771Z',
                'Saturn',
                'Saturn'
              ).toObject!(),
            })
          )
        }
      >
        ADD BOOKING
      </button>
      
    </motion.section>
  );
}
