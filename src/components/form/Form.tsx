import { motion } from 'framer-motion';
import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';

export default function Form() {
  return (
    <form className={css.form}>
      <div className={css.row}>
        <div className={css.column}>
          <Input label='FIRST NAME' id='name' x={100} y={100} delay={0.2} />
          <Input label='LAST NAME' id='surname' x={-100} y={-100} delay={0.4} />
        </div>
        <div className={css.column}>
          <Input label='EMAIL' id='email' type='email' x={-100} y={100} delay={0.6} />
          <Input label='PHONE' id='tel' type='tel' x={100} y={-100} delay={0.8} />
        </div>
        <div className={css.column}>
          <DateInput label='FROM' id='datefrom' x={0} y={-100} delay={1} />
          <DateInput label='TILL' id='datetill' x={0} y={100} delay={1.2} />
        </div>
      </div>
      <div className={css.column}>
        <Input label='PLANET' id='planet' type='select' x={-100} y={0} delay={1.4} />
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 2 } }}
          whileHover={{ scale: 1.2, color: '#FFA500' }}
          viewport={{ once: true}}
        >
          PROCEED
        </motion.button>
      </div>
    </form>
  );
}
