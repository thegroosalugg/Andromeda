import { useEffect, useState } from 'react';

interface HookProps {
  initialState: number;
  stateUpdateFn: (prevState: number) => number;
  fixedInterval?: number;
}

const useRepeatAnimation = ({ initialState, stateUpdateFn, fixedInterval }: HookProps) => {
  const [animateValue, setAnimateValue] = useState(initialState);
  const duration = fixedInterval ? fixedInterval : animateValue;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateValue(stateUpdateFn);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [animateValue, stateUpdateFn, duration]);

  return animateValue;
};

export default useRepeatAnimation;
