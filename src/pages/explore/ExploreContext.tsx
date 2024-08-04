import useScreen from '@/hooks/useScreen';
import { mediaQuery } from '@/util/mediaQuery';
import { createContext, useState } from 'react';

type ContextType = {
  activeFC: string;
  activeHandler: (id: string) => void;
  isLandscape: boolean;
  isMobile: boolean;
};

export const ExploreContext = createContext<ContextType>({
  activeFC: '',
  activeHandler: () => {},
  isLandscape: false,
  isMobile: false,
});

// redux causes unexpected behaviour if you switch active components mid animation on other routes, as well as requiring manual cleaning
// context is used instead as it is only required on explore route and cleans itself on route switch
export default function ExploreContextProvider({ children }: { children: React.ReactNode }) {
  const [   activeFC,    setActiveFC]  = useState('all');
  const [isAnimating, setIsAnimating]  = useState(false);
  const { isLandscape } = useScreen();
  const isMobile = mediaQuery();

  function activeHandler(id: string) {
    if (!isAnimating && id !== activeFC) {
      setIsAnimating(true);
      setActiveFC(id);
      setTimeout(() => setIsAnimating(false), 1200);
    }
  }

  const context: ContextType = {
    activeFC,
    activeHandler,
    isLandscape,
    isMobile,
  };

  return <ExploreContext.Provider value={context}>{children}</ExploreContext.Provider>;
}
