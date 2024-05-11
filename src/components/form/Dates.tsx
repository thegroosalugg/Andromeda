import { memo } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Input.module.css';
import useErrorAnimation from '@/hooks/useErrorAnimation';
import useBookedDates from '@/hooks/useBookedDates';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '@/store/formSlice';
import { FormData } from '@/models/FormData';
import { RootState } from '@/store/types';

const Dates = ({ id, savedData, bookedId }: { id: keyof FormData, savedData?: string, bookedId?: string }) => {
  const { x, delay, backgroundColor } = useErrorAnimation(id);
  const bookedDates = useBookedDates(bookedId);
  const dispatch = useDispatch();
  const { data, errors } = useSelector((state: RootState) => state.form);

  const today = new Date();
  const maxDate = new Date(today.setDate(today.getDate() + 30));

  function changeHandler(date: Date) {
    dispatch(updateData({ id, value: date.toISOString() }));
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
        selected={data[id] ? new Date(data[id] as string) : null}
        onChange={changeHandler}
        placeholderText={errors[id] ? errors[id] : (savedData ? savedData : id.toUpperCase())}
        dateFormat='dd MMMM yyyy'
        minDate={new Date()}
        maxDate={maxDate}
        excludeDates={bookedDates}
      />
    </motion.div>
  );
};

const MemoizedDates = memo(Dates);
export default MemoizedDates;
