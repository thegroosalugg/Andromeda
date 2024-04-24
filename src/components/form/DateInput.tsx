import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';

interface DateProps {
  label: string;
  id: string;
}

const DateInput: React.FC<DateProps> = ({ id, label }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 30);

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      transition={{ type: 'easeIn', duration: 0.5 }}
    >
      <DatePicker
        className={css.input}
        id={id}
        name={id}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText={label}
        dateFormat="dd MMMM yyyy"
        minDate={new Date()}
        maxDate={maxDate}
      />
    </motion.div>
  );
};

export default DateInput;
