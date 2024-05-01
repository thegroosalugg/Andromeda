import useErrorAnimation from '@/hooks/useErrorAnimation';
import { motion } from 'framer-motion';
import { memo } from 'react';
import css from './Input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '@/store/formSlice';
import { FormData } from '@/models/FormData';
import { RootState } from '@/store/types';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function Select({ id }: { id: keyof FormData }) {
  const { x, delay, backgroundColor } = useErrorAnimation(id);
  const dispatch = useDispatch();
  const { errors } = useSelector((state: RootState) => state.form)

  function changeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(updateData({id, value: event.currentTarget.value}))
  }

  return (
    <motion.select
      className={`${css.input} ${css.select}`}
      defaultValue=''
      onChange={changeHandler}
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      animate={{
        backgroundColor,
        x,
        transition: { type: 'easeIn', delay },
      }}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'easeIn', duration: 0.5 }}
    >
      <option value='' disabled hidden>
        {errors[id] ? errors[id] : id.toUpperCase()}
      </option>
      {planets.map((planet) => (
        <option key={planet} value={planet}>
          {planet}
        </option>
      ))}
    </motion.select>
  );
}

const MemoizedSelect = memo(Select);
export default MemoizedSelect;
