import { motion } from 'framer-motion';
import Input from './Input';
import css from './Login.module.css';
import useValidate from '@/hooks/useValidate';

export default function Login() {
  const validate = useValidate({ loggingIn: true });

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
        <motion.button onClick={validate} whileHover={{ color: '#FFA500' }}>
          GO
        </motion.button>
      </div>
    </motion.div>
  );
}
