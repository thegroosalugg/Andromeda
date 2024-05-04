import User from '@/models/User';
import { logout } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import css from './UserPortal.module.css';
import List from '@/components/list/List';

export default function UserPortal(user: User) {
  const { id, bookings, ...userDetails } = user;
  const dispatch = useDispatch();

  return (
    <>
      <section className={css.portal}>
        {/* id is not needed anywhere, I just wanted to remove it from the list. So I concatenated it to the key to get rid of the warnings */}
        <List className={css.user} items={Object.entries(userDetails)} keyFn={([key]) => key + id}>
          {([key, value]) => (
            <p>
              <strong>{key}</strong><span>{value}</span>
            </p>
          )}
        </List>
        <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
          {(booking) => <p>{booking.shipId}</p>}
        </List>
      </section>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </>
  );
}
