import { motion } from 'framer-motion';
import Input from './Input';
import css from './Login.module.css';

export default function Login() {
  return (
    <motion.div className={css.login} whileHover={{ scale: 1.2 }}>
      <p>Already have an account?</p>
      <div className={css.row}>
        <Input id='login' login />
        <motion.button whileHover={{ color: '#FFA500' }}>GO</motion.button>
      </div>
    </motion.div>
  );
}
