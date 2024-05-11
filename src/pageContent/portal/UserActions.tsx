import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { logout, deleteUser } from '@/store/userSlice';
import { clearForm } from '@/store/formSlice';
import css from './UserActions.module.css';

export default function UserActions({id}: { id: string }) {
  const [confirmDialog, setConfirmDialog] = useState(false);
  const dispatch = useDispatch();

  function confirmHandler() {
    setConfirmDialog((prev) => !prev);
  }

  function handleLogout() {
    window.scrollTo(0, 125);
    dispatch(logout());
    dispatch(clearForm());
  }

  return (
    <div className={css.actions}>
      <button onClick={handleLogout}>LOGOUT</button>
      <AnimatePresence mode='wait'>
        <motion.div
          key={'a' + confirmDialog}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 1 }}
          exit={{ opacity: 0, x: 100 }}
          className={css.dialog}
        >
          {!confirmDialog ? (
            <button onClick={confirmHandler}>DELETE ACCOUNT</button>
          ) : (
            <>
              <button onClick={() => dispatch(deleteUser(id))}>CONFIRM</button>
              <button onClick={confirmHandler} className={css.cancel}>
                CANCEL
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
