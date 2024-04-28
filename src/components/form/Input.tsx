import { motion } from 'framer-motion';
import css from './Input.module.css';
import { memo } from 'react';
import useErrorAnimation from '@/hooks/useErrorAnimation';

interface Errors {
  [key: string]: string;
}

interface InputProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: string ) => void;
}

const Input: React.FC<InputProps> = ({ id, errors, onUpdate, ...props }) => {
  const { value, setValue, x, delay, backgroundColor } = useErrorAnimation(id, errors, onUpdate);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = event.currentTarget.value;
    setValue(userInput);
    onUpdate(id, userInput);
  }

  return (
    <motion.input
      // autocomplete data does not re-trigger onChange state updates, so some animations won't play until user types. So off it goes instead.
      autoComplete='go-away' // removed name/id as I control all data. This prop also needs to be set to disable autocomplete
      className={css.input}
      placeholder={errors[id] ? errors[id] : id.toUpperCase()}
      onChange={changeHandler}
      value={value}
      {...props}
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      animate={{
        backgroundColor,
        x,
        transition: { type: 'easeIn', delay },
      }}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'easeIn', duration: 0.5 }}
    />
  );
};

const MemoizedInput = memo(Input);
export default MemoizedInput;
