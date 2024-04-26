import { memo } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';
import useErrorAnimation from '@/hooks/useErrorAnimation';

interface Errors {
  [key: string]: string;
}

type Booking = Date | string;

interface DateProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: Booking ) => void;
  from: Booking
  till: Booking;
}

function dateRange(startDate: Booking, endDate: Booking) {
  const dates = [];
  const date = new Date(startDate);

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

const DateInput: React.FC<DateProps> = ({ id, errors, onUpdate, from, till }) => {
  const { value, setValue, x, delay, backgroundColor } = useErrorAnimation(id, errors, onUpdate);

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 30);
  const bookedDates = dateRange(from, till)

  function changeHandler(date: Booking | null ) {
    setValue(date as Booking);
    onUpdate(id, date as Booking);
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
        selected={value as Date }
        onChange={changeHandler}
        placeholderText={errors[id] ? errors[id] : id.toUpperCase()}
        dateFormat='dd MMMM yyyy'
        minDate={new Date()}
        maxDate={maxDate}
        excludeDates={bookedDates}
      />
    </motion.div>
  );
};

const MemoizedDateInput = memo(DateInput);
export default MemoizedDateInput;
