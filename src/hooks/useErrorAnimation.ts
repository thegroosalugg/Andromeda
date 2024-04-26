import { useEffect, useState } from "react";

interface Errors {
  [key: string]: string;
}

export default function useErrorAnimation(
  id: string,
  errors: Errors,
  onUpdate: (id: string, value: string ) => void,
) {
  const [value, setValue] = useState<Date | string>('');
  const [x, setX] = useState([0]);

  const delay = 0.1 * (Object.keys(errors).indexOf(id) + 1);
  const backgroundColor = errors[id] ? '#e137195d' : '#f0f8ff21';

  useEffect(() => {
    if (errors[id]) {
      setValue('');
      onUpdate(id, '');
      setX([0 + Math.random() / 1000, 10, 0, 10, 0]);
    } else {
      setX([0]);
    }
  }, [errors, id, onUpdate]);

  return { value, setValue, x, delay, backgroundColor };
}
