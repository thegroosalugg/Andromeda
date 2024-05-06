import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import Input from './Input';
import Select from './Select';
import Dates from './Dates';
import Login from './Login';
import { RootState } from '@/store/types';
import css from './Form.module.css';
import useValidate from '@/hooks/useValidate';

export default function Form({ withBooking }: { withBooking?: boolean }) {
  const { user } = useSelector((state: RootState) => state.users);
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };
  const validate = useValidate({ withBooking });

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    validate();
  }

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
        <AnimatePresence>
          {!user && (
            <>
              <Input id='name' />
              <Input id='surname' />
              <Input id='email' />
              <Input id='phone' />
            </>
          )}
        </AnimatePresence>
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
      <AnimatePresence>{!user && <Login />}</AnimatePresence>
    </div>
  );
}
