import { useDispatch } from 'react-redux';
import { saveItem, toggle } from '@/store/modalSlice';
import { clearForm } from '@/store/formSlice';

export default function useCloseModal() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(toggle());
    dispatch(clearForm());
    dispatch(saveItem(null));
  }

  return closeModal;
}
