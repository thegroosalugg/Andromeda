import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, updateBooking, addUser, setUser, updateUser, addOrder } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import useSearch from './useSearch';
import User from '@/models/User';
import Order from '@/models/Order';
import Booking from '@/models/Booking';
import { validateBooking, validateEmptyFields, validateLogin, validateUser } from '@/util/validateForm';
import { clearAndLog } from '@/util/captainsLog';
import { saveItem, updateItem } from '@/store/modalSlice';
import { clearCart } from '@/store/cartSlice';

interface ValidateOptions {
  withOrder?: boolean;
  withBooking?: boolean;
  update?: { userId: string; booking?: Booking };
  loggingIn?: boolean;
}

const useValidate = ({ withOrder, withBooking, update, loggingIn }: ValidateOptions = {}) => {
  const {
    foundId: shipId,
    stateSlice: { users, user },
  } = useSearch({ search: { id: 'shipId', withParams: true }, reducer: 'users' });
  const { data } = useSelector((state: RootState) => state.form);
  const { items } = useSelector((state: RootState) => state.cart);
  const { name, surname, email, phone, street, city, postcode, country, from, till, pickup, dropoff, price, login } = data;
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
    const orderErr = withOrder ? validateEmptyFields({ street, city, postcode, country }) : {};
    const bookingErr = withBooking ? validateBooking({ from, till, pickup, dropoff }, users, shipId!) : {};
    const loginErr = loggingIn ? validateLogin(login, users) : {};

    const errors = { ...userErr, ...orderErr, ...bookingErr, ...updateErr, ...loginErr };
    dispatch(setErrors(errors));

    if (Object.keys(errors).length === 0) {
      let currentUser;

      if (user) {
        currentUser = user;
      } else if (!loggingIn) {
        currentUser = new User(name!, surname!, email!, phone!).toObject!();
        dispatch(addUser(currentUser));
      }

      const cartTotal = items.reduce((total, item) => total + item.quantity * +item.price, 0).toFixed(2);
      const order = withOrder && new Order({ street, city, postcode, country } as Order['address'], cartTotal, items).toObject!();
      const booking = withBooking && new Booking(shipId!, from!, till!, pickup!, dropoff!, price!).toObject!();

      order && currentUser && dispatch(addOrder({ currentUser, order}));
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
          dispatch(updateItem({ key: 'booking', data: editedData }));
        } else {
          dispatch(updateUser(editedData as User));
        }
      }

      if (withOrder) {
        dispatch(clearCart());
        dispatch(saveItem(order))
      }

      dispatch(clearForm());

      if (!update) {
        window.scrollTo(0, 125);
        !loggingIn && withBooking && navigate('/user');
      }
    }
    clearAndLog({ errors }, { data }, { user }, { users }); // logData
  };
};

export default useValidate;
