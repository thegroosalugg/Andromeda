import { useEffect, useState } from 'react';

const useScreen = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isLandscape: window.innerWidth > window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        isLandscape: window.innerWidth > window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screen;
};

export default useScreen;
