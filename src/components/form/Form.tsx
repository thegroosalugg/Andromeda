import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';

export default function Form() {
  return (
    <form className={css.form}>
      <div className={css.column}>
        <Input label='FIRST NAME' id='name' />
        <Input label='LAST NAME'  id='surname' />
      </div>
      <div className={css.column}>
        <Input label='EMAIL' id='email' type='email' />
        <Input label='PHONE' id='tel'   type='tel' />
      </div>
      <div className={css.column}>
        <DateInput label='FROM' id='datefrom' />
        <DateInput label='TILL' id='datetill' />
      </div>
      <button>PROCEED</button>
    </form>
  );
}
