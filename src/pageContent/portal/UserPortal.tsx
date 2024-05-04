import User from '@/models/User';
import { logout, updateUser } from '@/store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserPortal.module.css';
import List from '@/components/list/List';
import Input from '@/components/form/Input';
import { FormData } from '@/models/FormData';
import { validateUser } from '@/util/validateForm';
import { RootState } from '@/store/types';
import { clearForm, setErrors } from '@/store/formSlice';

export default function UserPortal(user: User) {
  const { id, bookings, ...userDetails } = user;
  const { users } = useSelector((state: RootState) => state.users);
  const { data } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  function updateHandler() {
    const editedData = Object.fromEntries(Object.entries(data).filter((entry) => entry[1]));

    const errors = validateUser(editedData, users);
    dispatch(setErrors(errors));
    console.log('USER PORTAL ERRORS', errors);

    if (Object.keys(errors).length === 0) {
      editedData.id = id;
      dispatch(updateUser(editedData as User));
      dispatch(clearForm());
    }
  }

  console.log('USER PORTAL FORMDATA', data);

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
      <button onClick={updateHandler}>SAVE</button>
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </>
  );
}
