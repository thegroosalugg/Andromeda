import User from '@/models/User';
import { logout } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import css from './UserPortal.module.css';

export default function UserPortal(user: User) {
  const { name, surname, email, phone, bookings } = user;
  const dispatch = useDispatch();

  return (
    <>
      <section className={css.portal}>
        <div className={css.details}>
          <h2>{name}</h2>
          <h2>{surname}</h2>
          <h2>{email}</h2>
          <h2>{phone}</h2>
        </div>
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>{booking.shipId}</li>
          ))}
        </ul>
      </section>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </>
  );
}
