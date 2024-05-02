import Input from './Input';
import css from './Login.module.css'

export default function Login() {
  return (
    <div className={css.login}>
      <p>Already have an account?</p>
      <div className={css.row}>
        <Input id='login' />
        <button>Login</button>
      </div>
    </div>
  );
}
