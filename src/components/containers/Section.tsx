import { useScroll, useTransform } from 'framer-motion';
import MotionDiv from '../UI/MotionDiv';
import css from './Section.module.css';
import rangeArray from '../../util/rangeArray';

export default function Section({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const screenWidth = window.innerWidth;

  let range = rangeArray(4, 550, 50)
  const transformVals = [1, 0.8, 0.5, 0];

  // increase scroll range if content is wrapped
  if (screenWidth <= 1180) {
    range = rangeArray(4, 800, 50);
  }

  const opacity = useTransform(scrollY, [...range], [...transformVals]);
  const y = useTransform(scrollY, [...range], ['0%', '-25%', '-50%', '-100%']);

  return (
    <MotionDiv
      element='section'
      className={css.section}
      style={{ opacity, y }}
    >
      {children}
    </MotionDiv>
  );
}
