import { memo } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';
import useErrorAnimation from '@/hooks/useErrorAnimation';

interface Errors {
  [key: string]: string;
}

interface DateProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: string | Date | null) => void
}

const DateInput: React.FC<DateProps> = ({ id, errors, onUpdate }) => {

  console.log('Rendering', id);
  const { value, setValue, x, delay, backgroundColor } = useErrorAnimation(id, errors, onUpdate, null);

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 30);

  function changeHandler(date: Date | null) {
    setValue(date);
    onUpdate(id, date);
  }

  return (
    <motion.div
      className={css.datepicker}
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      animate={{
        backgroundColor,
        x,
        transition: { type: 'easeIn', delay },
      }}
      transition={{ type: 'easeIn', duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <DatePicker
        className={css.input}
        selected={value as Date | null}
        onChange={changeHandler}
        placeholderText={errors[id] ? errors[id] : id.toUpperCase()}
        dateFormat='dd MMMM yyyy'
        minDate={new Date()}
        maxDate={maxDate}
      />
    </motion.div>
  );
};

const MemoizedDateInput = memo(DateInput);
export default MemoizedDateInput;
