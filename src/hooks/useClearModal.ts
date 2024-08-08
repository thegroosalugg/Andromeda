import { useDispatch } from 'react-redux';
import { closeModal, saveItem  } from '@/store/modalSlice';
import { clearForm } from '@/store/formSlice';

export default function useClearModal() {
  const dispatch = useDispatch();

  function clearModal() {
    dispatch(closeModal());
    dispatch(clearForm());
    dispatch(saveItem(null));
  }

  return clearModal;
}
