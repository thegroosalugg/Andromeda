import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import User from '@/models/User';
import Booking from '@/models/Booking';
import Input from './Input';
import Select from './Select';
import Dates from './Dates';
import Login from './Login';
import useSearch from '@/hooks/useSearch';
import { validateUser, validateBooking } from '@/util/validateForm';
import { addBooking, addUser } from '@/store/userSlice';
import { setErrors, clearForm } from '@/store/formSlice';
import { RootState } from '@/store/types';
import css from './Form.module.css';
// import { useNavigate } from 'react-router-dom';

export default function Form({ withBooking }: { withBooking?: boolean }) {
  // const navigate = useNavigate();
  const {
    slugId: shipId,
    stateSlice: { users, user },
  } = useSearch({ slugId: 'shipId', reducer: 'users' });
  const dispatch = useDispatch();
  const { data, errors } = useSelector((state: RootState) => state.form);
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.clear(); // *LOG & CLEAR*
    const { name, surname, email, phone, from, till, pickup, dropoff } = data;
    const userErrors = !user ? validateUser({ name, surname, email, phone }, users) : {};
    const bookingErrors = withBooking ? validateBooking({ from, till, pickup, dropoff }, users, shipId!) : {};

    const newErrors = { ...userErrors, ...bookingErrors };
    dispatch(setErrors(newErrors));

    if (Object.keys(newErrors).length === 0) {
      const currentUser = user ? user : new User(name!, surname!, email!, phone!).toObject!();
      const booking = withBooking && new Booking(shipId!, from!, till!, pickup!, dropoff!).toObject();

      !user && dispatch(addUser(currentUser));
      booking && dispatch(addBooking({ currentUser, booking }));
      dispatch(clearForm())
    }
  }

  // prettier-ignore
  console.log('FORM/DATA', data, '\n \n', 'ERRORS!', errors, '\n \n', 'LOGGED IN AS', user, '\n \n', 'DATABASE', users); // *LOG & CLEAR*

  return (
    <div className={css.overlay}>
      <motion.form
        layout
        onSubmit={submitHandler}
        className={css.form}
        transition={{ staggerChildren: 0.1 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {!user && (
          <>
            <Input id='name' />
            <Input id='surname' />
            <Input id='email' />
            <Input id='phone' />
          </>
        )}
        {withBooking && (
          <>
            <Dates id='from' />
            <Dates id='till' />
            <Select id='pickup' />
            <Select id='dropoff' />
          </>
        )}
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
      {!user && <Login />}
    </div>
  );
}
