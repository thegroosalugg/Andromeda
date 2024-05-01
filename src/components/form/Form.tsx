import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';
import { validateUser, validateBooking, FormData } from '@/util/validateForm';
import { useDispatch } from 'react-redux';
import { userActions } from '@/store/userSlice';
import User from '@/models/User';
import Booking from '@/models/Booking';
import useSearch from '@/hooks/useSearch';
import Select from './Select';
// import { useNavigate } from 'react-router-dom';

export default function Form() {
  // const navigate = useNavigate();
  const {
    slugId: shipId,
    stateSlice: { users, user },
  } = useSearch({ slugId: 'shipId', reducer: 'users' });
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [  data,   setData] = useState({});

  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };

  const updateHandler = useCallback((id: string, value: string) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }, []);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.clear(); // *LOG & CLEAR*
    const { name, surname, email, phone, from, till, pickup, dropoff } = data as FormData;
    const userErrors = !user ? validateUser({ name, surname, email, phone }, users) : {};
    const bookingErrors = validateBooking({ from, till, pickup, dropoff }, users, shipId!);

    const newErrors = { ...userErrors, ...bookingErrors };
    console.log('ERRORS!', newErrors); // *LOG & CLEAR*
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const currentUser = user ? user : new User(name!, surname!, email!, phone!).toObject!();
      const booking = new Booking(shipId!, from!, till!, pickup!, dropoff!).toObject();

      !user && dispatch(userActions.addUser(currentUser));
      dispatch(userActions.addBooking({ currentUser, booking }));
    }
  }

  console.log('FORM/DATA', data, '\n \n', 'FORM/USER', user, '\n \n', 'FORM/USERS', users); // *LOG & CLEAR*

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
            <Input errors={errors} onUpdate={updateHandler} id='name' />
            <Input errors={errors} onUpdate={updateHandler} id='surname' />
            <Input errors={errors} onUpdate={updateHandler} id='email' />
            <Input errors={errors} onUpdate={updateHandler} id='phone' />
          </>
        )}
        <DateInput errors={errors} onUpdate={updateHandler} id='from' />
        <DateInput errors={errors} onUpdate={updateHandler} id='till' />
        <Select id='pickup'  errors={errors} onUpdate={updateHandler} />
        <Select id='dropoff' errors={errors} onUpdate={updateHandler} />
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
    </div>
  );
}
