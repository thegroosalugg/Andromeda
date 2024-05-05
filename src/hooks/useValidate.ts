import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, addUser, setUser, updateUser } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useSearch from './useSearch';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { validateBooking, validateLogin, validateUser } from '@/util/validateForm';
import { captainsLog } from '@/util/captainsLog';

interface ValidateOptions {
  withBooking?: boolean;
  updateId?: string | number;
  loggingIn?: boolean;
}

const useValidate = ({ withBooking, updateId, loggingIn }: ValidateOptions = {}) => {
  const {
    slugId: shipId,
    stateSlice: { users, user },
  } = useSearch({ slugId: 'shipId', reducer: 'users' });
  const { data } = useSelector((state: RootState) => state.form);
  const { name, surname, email, phone, from, till, pickup, dropoff, login } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    const editedData = updateId
      ? Object.fromEntries(Object.entries(data).filter((entry) => entry[1]))
      : {};
    const updateErrors = updateId ? validateUser(editedData, users) : {};
    const userErrors = !user && !loggingIn ? validateUser({ name, surname, email, phone }, users) : {};
    const bookingErrors = withBooking
      ? validateBooking({ from, till, pickup, dropoff }, users, shipId!)
      : {};
    const loginErrs = loggingIn ? validateLogin(login, users) : {};

    captainsLog(
      { updateId },
      { loggingIn },
      { user },
      { users },
      { updateErrors },
      { userErrors },
      { bookingErrors },
      { loginErrs }
    );

    const newErrors = { ...userErrors, ...bookingErrors, ...updateErrors, ...loginErrs };
    dispatch(setErrors(newErrors));

    if (Object.keys(newErrors).length === 0) {
      const currentUser = user ? user : new User(name!, surname!, email!, phone!).toObject!();
      const booking =
        withBooking && new Booking(shipId!, from!, till!, pickup!, dropoff!).toObject();

      !user && !loggingIn && dispatch(addUser(currentUser));
      booking && dispatch(addBooking({ currentUser, booking }));
      updateId && dispatch(updateUser(editedData as User));
      loggingIn && dispatch(setUser({ email: login! }));
      dispatch(clearForm());

      if (!updateId) {
        window.scrollTo(0, 125);
        navigate('/user');
      }
    }
  };
};

export default useValidate;