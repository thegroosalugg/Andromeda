import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/uiSlice';
import css from './Modal.module.css';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(uiActions.toggle());
  }

  return createPortal(
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
    </>,
    document.getElementById('modal')!
  );
};

export default Modal;
