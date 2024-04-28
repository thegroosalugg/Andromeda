import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';
import { validateForm } from '@/util/validateForm';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@/store/userSlice';
import { RootState } from '@/store/types';
import User from '@/models/User';
import Booking from '@/models/Booking';
// import { useNavigate } from 'react-router-dom';

export default function Form() {
  // const navigate = useNavigate();
  const { shipId } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const [errors, setErrors] = useState({});
  const [  data,   setData] = useState({
    id:     shipId!,
    name:        '',
    surname:     '',
    email:       '',
    phone:       '',
    from:        '',
    till:        '',
    destination: '',
  });
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };

  const updateHandler = useCallback((id: string, value: string) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }, []);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = validateForm(data, users, shipId!);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const { name, surname, email, phone, id, from, till, destination } = data;
      const user = new User(name, surname, email, phone);
      const booking = new Booking(id, from, till, destination);

      dispatch(userActions.addUser(JSON.parse(JSON.stringify(user)))); // serialize class instances
      dispatch(userActions.addBooking({ userId: user.id, booking: JSON.parse(JSON.stringify(booking)) }));
    }
  }

  console.log(users) // log & clear

  return (
    <div className={css.overlay}>
      <motion.form
        onSubmit={submitHandler}
        className={css.form}
        transition={{ staggerChildren: 0.1 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <Input     errors={errors} onUpdate={updateHandler} id='name' />
        <Input     errors={errors} onUpdate={updateHandler} id='surname' />
        <Input     errors={errors} onUpdate={updateHandler} id='email' />
        <Input     errors={errors} onUpdate={updateHandler} id='phone' />
        <DateInput errors={errors} onUpdate={updateHandler} id='from' />
        <DateInput errors={errors} onUpdate={updateHandler} id='till' />
        <Input     errors={errors} onUpdate={updateHandler} id='destination' />
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
    </div>
  );
}
