import Input from './Input';
import css from './Form.module.css';

export default function Form() {
  return (
    <form className={css.form}>
      <div className={css.column}>
        <Input label='FIRST NAME' id='name' />
        <Input label='LAST NAME' id='surname' />
      </div>
      <div className={css.column}>
        <Input label='DATE' id='date' type='date' />
        <Input label='DATE' id='date' type='date' />
      </div>
    </form>
  );
}
