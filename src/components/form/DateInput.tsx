import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';

interface DateProps {
  label: string;
     id: string;
      x: number;
      y: number;
  delay: number;
}

const DateInput: React.FC<DateProps> = ({ id, label, x, y, delay }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'easeIn', duration: 0.5, delay }}
    >
      <DatePicker
        className={css.input}
        id={id}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText={label}
        required
      />
    </motion.div>
  );
};

export default DateInput;
