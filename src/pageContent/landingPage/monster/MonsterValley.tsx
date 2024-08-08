import { useDispatch } from 'react-redux';
import { openModal } from '@/store/modalSlice';
import Modal from '@/components/modal/Modal';
import Monster from './Monster';
import Credits from './Credits';
import MotionButton from './MotionButton';
import css from './MonsterValley.module.css';

export default function MonsterValley() {
  const dispatch = useDispatch();

  return (
    <div className={css.valley}>
      <Modal>
        <Credits />
      </Modal>
      <Monster />
      <MotionButton text='CREDITS' onClick={() => dispatch(openModal())} />
      <Monster />
    </div>
  );
}
