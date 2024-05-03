import User from '@/models/User';
import { logout } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import css from './UserPortal.module.css';
import List from '@/components/list/List';

export default function UserPortal(user: User) {
  const { name, surname, email, phone, bookings } = user;
  const dispatch = useDispatch();

  return (
    <>
      <section className={css.portal}>
        <List className={css.user} items={[ name, surname, email, phone ]} keyFn={key => key}>
          {key => <p>{key}</p>}
        </List>
        <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
          {booking => <p>{booking.shipId}</p>}
        </List>
      </section>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </>
  );
}
