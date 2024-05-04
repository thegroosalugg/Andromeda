import User from '@/models/User';
import { logout } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import css from './UserPortal.module.css';
import List from '@/components/list/List';
import Input from '@/components/form/Input';
import { FormData } from '@/models/FormData';
import useValidate from '@/hooks/useValidate';

export default function UserPortal(user: User) {
  const { id, bookings, ...userDetails } = user;
  const validate = useValidate({ updateId: id });
  const dispatch = useDispatch();

  return (
    <>
      <section className={css.portal}>
        <List className={css.user} items={Object.entries(userDetails)} keyFn={([key]) => key}>
          {([key, value]) => (
            <p>
              <span>{key}</span>
              <Input id={key as keyof FormData} savedData={value} />
            </p>
          )}
        </List>
        <List className={css.bookings} items={bookings} keyFn={({ id }) => id}>
          {(booking) => <p>{booking.shipId}</p>}
        </List>
      </section>
      <button onClick={validate}>SAVE</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </>
  );
}
