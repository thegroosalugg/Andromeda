import { useEffect, useState } from 'react';
import rand from '../util/rand';

const useRepeatAnimation = (min: number, max: number) => {
  const [duration, setDuration] = useState(rand(min, max));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(rand(min, max));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration, min, max]);

  return duration;
};

export default useRepeatAnimation;
