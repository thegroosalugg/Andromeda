import css from './Error.module.css';
import Navigation from '../navigation/Navigation';

export default function ErrorPage() {
  return (
    <>
      <Navigation />
      <main className={css.error}>
        <h2>Whoops</h2>
        <p>An Error Occured</p>
      </main>
    </>
  );
}
