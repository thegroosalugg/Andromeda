import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css'

interface DateProps {
  label: string;
  id: string;
}

const DateInput: React.FC<DateProps> = ({ id, label }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <DatePicker
      className={css.input}
      id={id}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      placeholderText={label}
    />
  );
};

export default DateInput;
