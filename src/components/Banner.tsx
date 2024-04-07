import css from './Banner.module.css';
import MotionDiv from './UI/MotionDiv';

const Banner: React.FC = () => {
  return (
    <MotionDiv
      className={css.banner}
      variants={{ hidden: { x: '-100vw' }, visible: { x: 0 } }}
      transition={{ type: 'easeIn', duration: 2 }}
    >
      <MotionDiv
        element='span'
        variants={{
          hidden: { opacity: 0, translateY: '-50%' },
          visible: { opacity: 1, translateY: '0%' },
        }}
        transition={{ type: 'easeIn', duration: 1, delay: 2 }}
      >
        CHECK OUT THE FLEET
      </MotionDiv>
    </MotionDiv>
  );
};

export default Banner;
