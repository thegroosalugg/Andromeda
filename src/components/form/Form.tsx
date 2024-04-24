import { motion } from 'framer-motion';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';
import { useFormValidation } from '@/hooks/useFormValidation';
// import { useNavigate } from 'react-router-dom';

const labels = {
  name: 'FIRST NAME',
  surname: 'LAST NAME',
  email: 'EMAIL',
  phone: 'PHONE',
  from: 'FROM',
  till: 'TILL',
  destination: 'DESTINATION',
};

export default function Form() {
  // const navigate = useNavigate();
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };
  const { errors, validate } = useFormValidation();

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    validate(data);

    console.clear(); console.log('find me in /components/form', data, errors); // log & clear
    // navigate('/ships');
  }

  return (
    <div className={css.overlay}>
      <motion.form
        onSubmit={submitHandler}
        className={css.form}
        transition={{ staggerChildren: 0.1 }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <Input label={errors.name || labels.name} id='name' />
        <Input label={errors.surname || labels.surname} id='surname' />
        <Input label={errors.email || labels.email} id='email' />
        <Input label={errors.phone || labels.phone} id='phone' />
        <DateInput label={errors.from || labels.from} id='from' />
        <DateInput label={errors.till || labels.till} id='till' />
        <Input label={errors.destination || labels.destination} id='destination' />
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
    </div>
  );
}
