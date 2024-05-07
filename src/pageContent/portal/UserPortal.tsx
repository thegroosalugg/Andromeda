import User from '@/models/User';
import { logout } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import css from './UserPortal.module.css';
import List from '@/components/list/List';
import Input from '@/components/form/Input';
import { FormData } from '@/models/FormData';
import useValidate from '@/hooks/useValidate';
import BookedItem from './BookedItem';
import { motion } from 'framer-motion';
import { clearForm } from '@/store/formSlice';

export default function UserPortal(user: User) {
  const { id, bookings, ...userDetails } = user;
  const validate = useValidate({ updateId: id });
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
        {bookings.length > 0 && (
          <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
            {(booking) => <BookedItem {...booking} />}
          </List>
        )}
      </section>
      <button className={css.logout} onClick={handleLogout}>
        LOGOUT
      </button>
    </motion.section>
  );
}
