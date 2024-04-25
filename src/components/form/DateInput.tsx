import { useState, useEffect, memo } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';

interface Errors {
  [key: string]: string;
}

interface DateProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: Date | null) => void;
}

const DateInput: React.FC<DateProps> = ({ id, errors, onUpdate }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  console.log('Rendering', id)

  const delay =  0.1 * (Object.keys(errors).indexOf(id) + 1);
  const backgroundColor = errors[id] ? '#e137195d' : '#f0f8ff21'
  const x = errors[id] ? [0, 10, 0, 10, 0] : 0

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 30);

  useEffect(() => {
    if (errors[id]) {
      setStartDate(null); // removes dates if user input is wrong. Placeholder displayes error
      onUpdate(id, null);
    }
  }, [errors, id, onUpdate]);

  function changeHandler(date: Date | null) {
    setStartDate(date);
    onUpdate(id, date);
  }

  return (
    <motion.div
      className={css.datepicker}
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      animate={{
        backgroundColor,
        x, transition: { type: 'easeIn', delay }
      }}
      transition={{ type: 'easeIn', duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <DatePicker
        className={css.input}
        selected={startDate}
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
