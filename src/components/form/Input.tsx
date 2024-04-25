import { motion } from 'framer-motion';
import css from './Input.module.css';
import { useState, useEffect, memo } from 'react';

interface Errors {
  [key: string]: string;
}

interface InputProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, errors, onUpdate, ...props }) => {
  const [value, setValue] = useState('');
  console.log('Rendering', id)

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = event.currentTarget.value
    setValue(userInput);
    onUpdate(id, userInput);
  }

  useEffect(() => {
    if (errors[id]) {
      setValue('');
      onUpdate(id, '');
    }
  }, [errors, id, onUpdate]);

  return (
    <motion.input
      className={css.input}
      id={id}
      name={id}
      placeholder={errors[id] ? errors[id] : id.toUpperCase()}
      onChange={changeHandler}
      value={value}
      {...props}
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'easeIn', duration: 0.5 }}
    />
  );
};

const MemoizedInput = memo(Input);
export default MemoizedInput;
