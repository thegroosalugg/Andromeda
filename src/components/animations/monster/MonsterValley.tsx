import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
import { RootState } from '../../../store/types';
import Modal from '../../../components/modal/Modal';
import Monster from './Monster';
import css from './MonsterValley.module.css';

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
      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.2, color: '#FFFFFF', textShadow: '2px 2px 4px #4B0082' }}
        animate={{
          color: [
            '#FF0000',
            '#FF7F00',
            '#FFFF00',
            '#00FF00',
            '#0000FF',
            '#4B0082',
            '#9400D3',
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        CREDITS
      </motion.button>
      <Monster />
    </div>
  );
}
