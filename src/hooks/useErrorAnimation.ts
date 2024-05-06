import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '@/store/formSlice';
import { FormData } from '@/models/FormData';
import { RootState } from '@/store/types';

export default function useErrorAnimation(id: keyof FormData) {
  const [x, setX] = useState([0]);
  const dispatch = useDispatch();
  const { errors } = useSelector((state: RootState) => state.form)

  const delay = 0.1 * (Object.keys(errors).indexOf(id) + 1);
  const backgroundColor = errors[id] ? '#e137195d' : '#f0f8ff21';

  useEffect(() => {
    if (errors[id]) {
      dispatch(updateData({id, value: ''}))
      setX([0 + Math.random() / 1000, 10, 0, 10, 0]);
    } else {
      setX([0]);
    }
  }, [errors, id, dispatch]);

  return { x, delay, backgroundColor };
}
