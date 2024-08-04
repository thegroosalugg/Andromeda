import { useEffect, useState } from 'react';

// landscape var separated from screenSize hook due to unnecessary re-renders when screen size changes but orientation doesn't
const useDeviceOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const newValue = window.innerWidth > window.innerHeight;

      if (newValue !== isLandscape) {
        setIsLandscape(newValue);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLandscape]);

  return isLandscape;
};

export default useDeviceOrientation;
