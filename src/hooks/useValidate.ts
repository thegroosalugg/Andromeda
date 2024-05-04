import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, addUser } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useSearch from './useSearch';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { validateBooking, validateUser } from '@/util/validateForm';

const useValidate = (withBooking: boolean | undefined) => {
  const {
    slugId: shipId,
    stateSlice: { users, user },
  } = useSearch({ slugId: 'shipId', reducer: 'users' });
  const { data } = useSelector((state: RootState) => state.form);
  const { name, surname, email, phone, from, till, pickup, dropoff } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    const userErrors = !user ? validateUser({ name, surname, email, phone }, users) : {};
    const bookingErrors = withBooking
      ? validateBooking({ from, till, pickup, dropoff }, users, shipId!)
      : {};

    const newErrors = { ...userErrors, ...bookingErrors };
    dispatch(setErrors(newErrors));

    if (Object.keys(newErrors).length === 0) {
      const currentUser = user ? user : new User(name!, surname!, email!, phone!).toObject!();
      const booking =
        withBooking && new Booking(shipId!, from!, till!, pickup!, dropoff!).toObject();

      !user && dispatch(addUser(currentUser));
      booking && dispatch(addBooking({ currentUser, booking }));
      dispatch(clearForm());
      window.scrollTo(0, 125);
      navigate('/user');
    }

    console.clear(); // *LOG & CLEAR*
    // prettier-ignore
    console.log('FORM/DATA', data, '\n \n', 'ERRORS!', newErrors, '\n \n', 'LOGGED IN AS', user, '\n \n', 'DATABASE', users);
  };
};

export default useValidate;
