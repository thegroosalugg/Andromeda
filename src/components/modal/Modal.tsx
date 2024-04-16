import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return createPortal(
    <>
      <div className={css.backdrop} onClick={onClose} />
      <dialog open className={css.modal}>
        {children}
      </dialog>
    </>,
    document.getElementById('modal')!
  );
};

export default Modal;
