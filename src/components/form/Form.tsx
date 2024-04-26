import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';
import { validateForm } from '@/util/validateForm';
// import { useNavigate } from 'react-router-dom';

export default function Form() {
  // const navigate = useNavigate();
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };
  const [errors, setErrors] = useState({});
  const [  data,   setData] = useState({
    name:        '',
    surname:     '',
    email:       '',
    phone:       '',
    from:        '',
    till:        '',
    destination: '',
  });

  const updateHandler = useCallback((id: string, value: string | Date | null) => {
    setData((prevData) => ({ ...prevData, [id]: value }));
  }, []);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        <Input     errors={errors} onUpdate={updateHandler} id='name' />
        <Input     errors={errors} onUpdate={updateHandler} id='surname' />
        <Input     errors={errors} onUpdate={updateHandler} id='email' />
        <Input     errors={errors} onUpdate={updateHandler} id='phone' />
        <DateInput errors={errors} onUpdate={updateHandler} id='from' />
        <DateInput errors={errors} onUpdate={updateHandler} id='till' />
        <Input     errors={errors} onUpdate={updateHandler} id='destination' />
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
    </div>
  );
}
