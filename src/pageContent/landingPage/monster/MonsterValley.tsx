import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/uiSlice';
import Modal from '@/components/modal/Modal';
import Monster from './Monster';
import css from './MonsterValley.module.css';
import MotionButton from './MotionButton';

export default function MonsterValley() {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(uiActions.toggle());
  }
  
  return (
    <div className={css.valley}>
       <Modal>HELLO</Modal>
      <Monster />
      <MotionButton text='CREDITS' onClick={openModal} />
      <Monster />
    </div>
  );
}
