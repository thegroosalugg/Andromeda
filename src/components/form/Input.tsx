import { motion } from 'framer-motion';
import css from './Input.module.css';

interface InputProps {
  label: string;
     id: string;
  type?: string;
      x: number;
      y: number;
  delay: number;
}

const Input: React.FC<InputProps> = ({ id, label, type = 'text', x, y, delay, ...props }) => {
  return (
    <motion.input
      className={css.input}
      id={id}
      name={id}
      type={type}
      placeholder={label}
      {...props}
      required
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'easeIn', duration: 0.5, delay }}
    />
  );
};

export default Input;
