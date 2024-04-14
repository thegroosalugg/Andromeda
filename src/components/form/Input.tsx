import css from './Input.module.css';

interface InputProps {
  label: string;
  id: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, label, type = 'text', ...props }) => {
  return (
    <input
      className={css.input}
      id={id}
      name={id}
      type={type}
      placeholder={label}
      {...props}
      required
    />
  );
};

export default Input;
