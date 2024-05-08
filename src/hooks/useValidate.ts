import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, updateBooking, addUser, setUser, updateUser } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useSearch from './useSearch';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { validateBooking, validateLogin, validateUser } from '@/util/validateForm';
import { clearAndLog } from '@/util/captainsLog';

interface ValidateOptions {
  withBooking?: boolean;
  update?: { userId: string; booking?: Booking };
  loggingIn?: boolean;
}

const useValidate = ({ withBooking, update, loggingIn }: ValidateOptions = {}) => {
  const {
    foundId: shipId,
    stateSlice: { users, user },
  } = useSearch({ search: { id: 'shipId', withParams: true }, reducer: 'users' });
  const { data } = useSelector((state: RootState) => state.form);
  const { name, surname, email, phone, from, till, pickup, dropoff, login } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    let editedData = update
      ? Object.fromEntries(Object.entries(data).filter((entry) => entry[1]))
      : {};

    let updateErr = {};
    if (update) {
      if (update.booking) {
        editedData =
          editedData.from || editedData.till ? { ...update.booking!, ...editedData } : editedData;
        updateErr = validateBooking(editedData, users, update.booking.shipId);
      } else {
        updateErr = validateUser(editedData, users);
      }
    }

    const userErr = !user && !loggingIn ? validateUser({ name, surname, email, phone }, users) : {};
    const bookingErr = withBooking ? validateBooking({ from, till, pickup, dropoff }, users, shipId!) : {};
    const loginErr = loggingIn ? validateLogin(login, users) : {};

    const errors = { ...userErr, ...bookingErr, ...updateErr, ...loginErr };
    dispatch(setErrors(errors));

    if (Object.keys(errors).length === 0) {
      let currentUser;

      if (user) {
        currentUser = user;
      } else if (!loggingIn) {
        currentUser = new User(name!, surname!, email!, phone!).toObject!();
        dispatch(addUser(currentUser));
      }

      const booking = withBooking && new Booking(shipId!, from!, till!, pickup!, dropoff!).toObject!();

      booking && currentUser && dispatch(addBooking({ currentUser, booking }));
      loggingIn && dispatch(setUser({ email: login! }));

      if (update) {
        if (update.booking) {
          dispatch(
            updateBooking({
              userId: update.userId,
              bookingId: update.booking.id,
              data: editedData as Booking,
            })
          );
        } else {
          dispatch(updateUser(editedData as User));
        }
      }

      dispatch(clearForm());

      if (!update) {
        window.scrollTo(0, 125);
        !loggingIn && navigate('/user');
      }
    }
    clearAndLog({ errors }, { data }, { user }, { users });
  };
};

export default useValidate;
