import { memo } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';
import useErrorAnimation from '@/hooks/useErrorAnimation';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Booking from '@/models/Booking';

interface Errors {
  [key: string]: string;
}

interface DateProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: string) => void;
}

function dateRange(from: string, till: string) {
  const dates = [];
  const startDate = new Date(from);
  const endDate = new Date(till);

  while (startDate <= endDate) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
}

const DateInput: React.FC<DateProps> = ({ id, errors, onUpdate }) => {
  const { value, updateFormData, x, delay, backgroundColor } = useErrorAnimation(id, errors, onUpdate);
  const { shipId } = useParams();
  console.log(shipId)

  const users = useSelector((state: RootState) => state.users.users);

  const bookedDates: Date[] = [];
  users.forEach((user) => {
    user.bookings.forEach((booking: Booking) => {
      if (booking.id === shipId) {
        const dates = dateRange(booking.from, booking.till);
        bookedDates.push(...dates);
      }
    });
  });

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 30);

  function changeHandler(date: Date) {
    updateFormData(date.toISOString());
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
        selected={value ? new Date(value) : null}
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
