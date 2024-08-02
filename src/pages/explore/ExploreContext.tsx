import useScreen from '@/hooks/useScreen';
import { mediaQuery } from '@/util/mediaQuery';
import { createContext, useState } from 'react';

type ContextType = {
  isActive: string;
  activeHandler: (id: string) => void;
  width: number;
  height: number;
  landscape: boolean;
  isMobile: boolean;
};

export const ExploreContext = createContext<ContextType>({
  isActive: '',
  activeHandler: () => {},
  width: 0,
  height: 0,
  landscape: false,
  isMobile: false,
});

// redux causes unexpected behaviour if you switch active components mid animation on other routes, as well as requiring manual cleaning
// context is used instead as it is only required on explore route and cleans itself on route switch
export default function ExploreContextProvider({ children }: { children: React.ReactNode }) {
  const [   isActive,    setIsActive] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const { width, height, landscape } = useScreen();
  const isMobile = mediaQuery();

  function activeHandler(id: string) {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsActive(id);
      setTimeout(() => setIsAnimating(false), 1200);
    }
  }

  const context: ContextType = {
    isActive,
    activeHandler,
    width,
    height,
    landscape,
    isMobile,
  };

  return <ExploreContext.Provider value={context}>{children}</ExploreContext.Provider>;
}
