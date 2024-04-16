import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import css from './Modal.module.css';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(uiActions.toggle())
  }

  return createPortal(
    <>
      <div className={css.backdrop} onClick={closeModal} />
      <dialog open className={css.modal}>
        {children}
      </dialog>
    </>,
    document.getElementById('modal')!
  );
};

export default Modal;
