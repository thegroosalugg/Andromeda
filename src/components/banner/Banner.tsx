import { useScroll, useTransform } from 'framer-motion';
import MotionDiv from '../UI/MotionDiv';
import css from './Banner.module.css';
import rangeArray from '../../util/rangeArray';

const Banner: React.FC = () => {
  const { scrollY } = useScroll();
  const screenWidth = window.innerWidth;
  let bannerRange = rangeArray(5, 300, 50) // 5 length. 300 initial value. +50 increment per element in length.
  let textRange = rangeArray(4, 450, 50)

  // increase scroll range if content is wrapped
  if (screenWidth <= 1180) {
    bannerRange = rangeArray(5, 950, 50)
    textRange = rangeArray(4, 1050, 50)
  }

  const xBanner = useTransform(
    scrollY,
    [...bannerRange],
    ['-100vw', '-75vw', '-50vw', '-25vw', 0]
  );
  const yText = useTransform(
    scrollY,
    [...textRange],
    ['-100%', '-50%', '-25%', '0%']
  );
  const yOpacity = useTransform(scrollY, [...textRange], [0, 0, 0.7, 1]);

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
