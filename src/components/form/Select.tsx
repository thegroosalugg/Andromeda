import useErrorAnimation from '@/hooks/useErrorAnimation';
import { motion } from 'framer-motion';
import css from './Input.module.css';

interface Errors {
  [key: string]: string;
}

interface SelectProps {
  id: string;
  errors: Errors;
  onUpdate: (id: string, value: string) => void;
}

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function Select({ id, errors, onUpdate }: SelectProps) {
  const { updateFormData, x, delay, backgroundColor } = useErrorAnimation(
    id,
    errors,
    onUpdate
  );

  function changeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    updateFormData(event.currentTarget.value);
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

export default Select;