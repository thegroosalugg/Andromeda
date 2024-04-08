import { useScroll, useTransform } from 'framer-motion';
import MotionDiv from '../UI/MotionDiv';
import css from './Section.module.css';

export default function Section({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const screenWidth = window.innerWidth;

  let scrollRange = [0, 550, 600, 700];
  const transformVals = [1, 0.8, 0.5, 0];

  // increase scroll range if content is wrapped
  if (screenWidth <= 1180) {
    scrollRange = [0, 800, 900, 1100];
  }

  const opacity = useTransform(scrollY, [...scrollRange], [...transformVals]);
  const y = useTransform(scrollY, [...scrollRange], ['0%', '-25%', '-50%', '-100%']);

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
