import { useScroll, useTransform } from 'framer-motion';
import MotionDiv from './UI/MotionDiv';
import css from './Banner.module.css';

const Banner: React.FC = () => {
  const { scrollY } = useScroll();
  const xBanner = useTransform(
    scrollY,
    [0, 300, 350, 450, 500, 550],
    ['-100vw', '-75vw', '-50vw', '-25vw', '-12vw', 0]
  );
  const yText = useTransform(
    scrollY,
    [0, 500, 600, 700],
    ['-100%', '-50%', '-25%', '0%']
  );
  const yOpacity = useTransform(scrollY, [0, 500, 600, 700], [0, 0, 0.7, 1]);

  return (
    <MotionDiv className={css.banner} style={{ x: xBanner }}>
      <MotionDiv
        element='span'
        style={{ opacity: yOpacity, translateY: yText }}
      >
        CHECK OUT THE FLEET
      </MotionDiv>
    </MotionDiv>
  );
};

export default Banner;
