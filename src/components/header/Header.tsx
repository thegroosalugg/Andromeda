import MotionDiv from '../UI/MotionDiv';
import css from './Header.module.css';

export default function Header({ text }: { text: string }) {
  return (
    <MotionDiv
      element='h1'
      className={css.header}
      variants={{
        hidden: { x: -500, scaleY: 0 },
        visible: { x: 0, scaleY: [0, 0, 0, 0.5, 1] },
      }}
      transition={{ type: 'easeIn', duration: 0.8 }}
    >
      {text.toUpperCase()}
    </MotionDiv>
  );
}
