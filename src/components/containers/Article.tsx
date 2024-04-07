import MotionDiv from '../UI/MotionDiv';
import css from './Article.module.css';

const string = 'No TV and no beer make Homer something something. ';

export default function Article() {
  return (
    <MotionDiv element='article' className={css.content}>
      <h3>{string}</h3>
      <p>{string.repeat(100)}</p>
    </MotionDiv>
  );
}
