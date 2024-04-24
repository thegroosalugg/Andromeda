import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';
import { validateForm } from '@/util/validateForm';
// import { useNavigate } from 'react-router-dom';

export default function Form() {
  // const navigate = useNavigate();
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };
  const [errors, setErrors] = useState({});

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const newErrors = validateForm(data);
    setErrors(newErrors);

    console.clear();
    if (Object.keys(newErrors).length !== 0) {
      console.log('HAS ERRORS!', newErrors);
      return;
    } else {
      console.log('VALIDATED', data);
      // navigate('/ships');
    }
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
        <Input id='name' errors={errors} />
        <Input id='surname' errors={errors} />
        <Input id='email' errors={errors} />
        <Input id='phone' errors={errors} />
        <DateInput id='from' errors={errors} />
        <DateInput id='till' errors={errors} />
        <Input id='destination' errors={errors} />
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
    </div>
  );
}
