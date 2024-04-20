import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { uiActions } from '@/store/uiSlice';
import { RootState } from '@/store/types';
import Modal from '@/components/modal/Modal';
import Monster from './Monster';
import css from './MonsterValley.module.css';
import MotionButton from './MotionButton';

export default function MonsterValley() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.ui);

  function openModal() {
    dispatch(uiActions.toggle());
  }

  return (
    <div className={css.valley}>
      <AnimatePresence>{modal && <Modal>HELLO</Modal>}</AnimatePresence>
      <Monster />
      <MotionButton text='CREDITS' onClick={openModal} />
      <Monster />
    </div>
  );
}
