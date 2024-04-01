import './Error.css';
import Navigation from '../navigation/Navigation';

export default function ErrorPage() {
  return (
    <>
      <Navigation />
      <main className='error'>
        <h2>Whoops</h2>
        <p>An Error Occured</p>
      </main>
    </>
  );
}
