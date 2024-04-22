import { motion } from 'framer-motion';
import css from './Input.module.css';

interface InputProps {
  label: string;
  id: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type = 'text', ...props }) => {
  return (
    <motion.input
      className={css.input}
      id={id}
      name={id}
      type={type}
      placeholder={label}
      {...props}
      required
      variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
      transition={{ type: 'easeIn', duration: 0.5 }}
    />
  );
};

export default Input;
