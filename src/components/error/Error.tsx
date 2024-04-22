import css from './Error.module.css';

export default function ErrorPage() {
  return (
    <section className={css.error}>
      <h2>Whoops</h2>
      <p>An Error Occured</p>
    </section>
  );
}
