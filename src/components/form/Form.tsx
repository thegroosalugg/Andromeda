import { motion } from 'framer-motion';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';
// import { useNavigate } from 'react-router-dom';

export default function Form() {
  // const navigate = useNavigate();
  const variants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log('find me in /components/form', data);
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
        <Input label='FIRST NAME' id='name' />
        <Input label='LAST NAME' id='surname' />
        <Input label='EMAIL' id='email' type='email' />
        <Input label='PHONE' id='tel' type='tel' />
        <DateInput label='FROM' id='datefrom' />
        <DateInput label='TILL' id='datetill' />
        <Input label='PLANET' id='planet' type='select' />
        <motion.button variants={variants} whileHover={{ scale: 1.2, color: '#FFA500' }}>
          PROCEED
        </motion.button>
      </motion.form>
    </div>
  );
}
