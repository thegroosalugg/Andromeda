import MotionDiv from '../UI/MotionDiv';
import css from './Article.module.css';

const string = 'No TV and no beer make Homer something something. ';

export default function Article() {
  return (
    <MotionDiv
      element='article'
      className={css.content}
      variants={{
        hidden: { height: 0 },
        visible: { height: 'auto' },
      }}
      transition={{ type: 'easeIn', duration: 1 }}
    >
      <h3>
        <MotionDiv
          element='span'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ type: 'linear', duration: 1, delay: 0.8 }}
        >
          FLY THE COUP
        </MotionDiv>
      </h3>
      <MotionDiv
        element='p'
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ type: 'linear', duration: 1 }}
      >
        {string.repeat(100)}
      </MotionDiv>
    </MotionDiv>
  );
}
