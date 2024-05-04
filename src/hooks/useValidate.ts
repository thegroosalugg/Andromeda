import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, addUser, updateUser } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useSearch from './useSearch';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { validateBooking, validateUser } from '@/util/validateForm';

interface ValidateOptions {
  withBooking?: boolean;
  updateId?: string | number;
}

const useValidate = ({ withBooking, updateId }: ValidateOptions = {}) => {
  const {
    slugId: shipId,
    stateSlice: { users, user },
  } = useSearch({ slugId: 'shipId', reducer: 'users' });
  const { data } = useSelector((state: RootState) => state.form);
  const { name, surname, email, phone, from, till, pickup, dropoff } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    const editedData = updateId
      ? Object.fromEntries(Object.entries(data).filter((entry) => entry[1]))
      : {};
    const updateErrors = updateId ? validateUser(editedData, users) : {};
    const userErrors = !user ? validateUser({ name, surname, email, phone }, users) : {};
    const bookingErrors = withBooking
      ? validateBooking({ from, till, pickup, dropoff }, users, shipId!)
      : {};

    const newErrors = { ...userErrors, ...bookingErrors, ...updateErrors };
    dispatch(setErrors(newErrors));

    if (Object.keys(newErrors).length === 0) {
      const currentUser = user ? user : new User(name!, surname!, email!, phone!).toObject!();
      const booking =
        withBooking && new Booking(shipId!, from!, till!, pickup!, dropoff!).toObject();

      !user && dispatch(addUser(currentUser));
      booking && dispatch(addBooking({ currentUser, booking }));
      updateId && dispatch(updateUser(editedData as User));
      dispatch(clearForm());

      if (!updateId) {
        window.scrollTo(0, 125);
        navigate('/user');
      }
    }

    console.clear(); // *LOG & CLEAR*
    // prettier-ignore
    console.log('FORM/DATA', data, '\n \n', 'ERRORS!', newErrors, '\n \n', 'LOGGED IN AS', user, '\n \n', 'DATABASE', users);
  };
};

export default useValidate;
