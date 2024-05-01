import User from '@/models/User';
import { logout } from '@/store/userSlice';
import { useDispatch } from 'react-redux';

export default function UserPortal(user: User) {
  const dispatch = useDispatch();

   return (
    <>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
      <h2>{user.name}</h2>
      <h2>{user.surname}</h2>
      <h2>{user.email}</h2>
      <h2>{user.phone}</h2>
      <ul>
        {user.bookings.map((booking) => (
          <li key={booking.id}>{booking.shipId}</li>
        ))}
      </ul>
    </>
  );
}
