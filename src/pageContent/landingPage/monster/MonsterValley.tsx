import { useDispatch } from 'react-redux';
import { modalActions } from '@/store/modalSlice';
import Modal from '@/components/modal/Modal';
import Monster from './Monster';
import css from './MonsterValley.module.css';
import MotionButton from './MotionButton';
import Credits from './Credits';

export default function MonsterValley() {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(modalActions.toggle());
  }

  return (
    <div className={css.valley}>
      <Modal>
        <Credits />
      </Modal>
      <Monster />
      <MotionButton text='CREDITS' onClick={openModal} />
      <Monster />
    </div>
  );
}
