import MotionDiv from '../UI/MotionDiv';
import css from './Section.module.css';

export default function Section({children}: {children: React.ReactNode}) {
  return (
    <MotionDiv element='section' className={css.section}>
      {children}
    </MotionDiv>
  );
}
