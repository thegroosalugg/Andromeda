import { motion } from 'framer-motion';
import css from './Input.module.css';

interface Errors {
  [key: string]: string;
}

interface InputProps {
  id: string;
  errors: Errors;
}

const Input: React.FC<InputProps> = ({ id, errors, ...props }) => {
  return (
    <motion.input
      className={css.input}
      id={id}
      name={id}
      placeholder={errors[id] ? errors[id] : id.toUpperCase()}
      {...props}
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'easeIn', duration: 0.5 }}
    />
  );
};

export default Input;
