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
          <div className={css.backdrop} onClick={closeModal} />
          <motion.dialog
            open
            className={css.modal}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
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
