import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import css from './Login.module.css';
import { validateLogin } from '@/util/validateForm';
import { clearForm, setErrors } from '@/store/formSlice';
import { RootState } from '@/store/types';
import { setUser } from '@/store/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  const { data } = useSelector((state: RootState) => state.form);
  const { login } = data;

  function submitHandler() {
    const isValid = validateLogin(login, users);
    dispatch(setErrors(isValid));

    if (Object.keys(isValid).length === 0) {
      dispatch(setUser({ email: login! }));
      dispatch(clearForm());
    }
  }

  return (
    <motion.div
      className={css.login}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      whileHover={{ scale: 1.2 }}
    >
      <p>Already have an account?</p>
      <div className={css.row}>
        <Input id='login' login />
        <motion.button onClick={submitHandler} whileHover={{ color: '#FFA500' }}>
          GO
        </motion.button>
      </div>
    </motion.div>
  );
}
