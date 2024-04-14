import Input from './Input';
import css from './Form.module.css';
import DateInput from './DateInput';

export default function Form() {
  return (
    <form className={css.form}>
      <div className={css.column}>
        <Input label='FIRST NAME' id='name' />
        <Input label='LAST NAME' id='surname' />
      </div>
      <div className={css.column}>
        <DateInput label='FROM' id='date' />
        <DateInput label='TILL' id='date' />
      </div>
    </form>
  );
}
