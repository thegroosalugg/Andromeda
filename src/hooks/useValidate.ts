import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, addUser, setUser, updateUser } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useSearch from './useSearch';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { validateBooking, validateLogin, validateUser } from '@/util/validateForm';
import { clearAndLog } from '@/util/captainsLog';

interface ValidateOptions {
  withBooking?: boolean;
  updateId?: string | number;
  loggingIn?: boolean;
}

const useValidate = ({ withBooking, updateId, loggingIn }: ValidateOptions = {}) => {
  const {
    foundId: shipId,
    stateSlice: { users, user },
  } = useSearch({ search: { id: 'shipId', withParams: true }, reducer: 'users' });
  const { data } = useSelector((state: RootState) => state.form);
  const { name, surname, email, phone, from, till, pickup, dropoff, login } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    const editedData = updateId ? Object.fromEntries(Object.entries(data).filter((entry) => entry[1])) : {};
    const updateErr = updateId ? validateUser(editedData, users) : {};
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
      updateId && dispatch(updateUser(editedData as User));
      loggingIn && dispatch(setUser({ email: login! }));
      dispatch(clearForm());

      if (!updateId) {
        window.scrollTo(0, 125);
        !loggingIn && navigate('/user');
      }
    }
    clearAndLog({errors}, {user}, {users})
  };
};

export default useValidate;
