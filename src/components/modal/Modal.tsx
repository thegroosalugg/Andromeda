import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggle } from '@/store/modalSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { clearForm } from '@/store/formSlice';
import css from './Modal.module.css';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.modal);

  function closeModal() {
    dispatch(toggle());
    dispatch(clearForm());
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
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
            whileInView='visible' // this is needed for the Input FCs inside Modal to be animated or they will vanish
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
