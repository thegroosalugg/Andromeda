import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/uiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import css from './Modal.module.css';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.ui);

  function closeModal() {
    dispatch(uiActions.toggle());
  }

  return createPortal(
    <AnimatePresence>
      {modal && (
        <>
          <motion.div
            className={css.backdrop}
            onClick={closeModal}
            whileHover={{ backgroundColor: 'rgba(10, 10, 10, 0.55)' }}
            transition={{ duration: 0.5, type: 'ease' }}
          />
          <motion.dialog
            open
            className={css.modal}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {children}
          </motion.dialog>
        </>
      )}
    </AnimatePresence>,
    document.getElementById('modal')!
  );
};

export default Modal;
