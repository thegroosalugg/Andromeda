import useDeviceOrientation from '@/hooks/useDeviceOrientation';
import { mediaQuery } from '@/util/mediaQuery';
import { createContext, useState, Dispatch, SetStateAction } from 'react';

type ContextType = {
         activeFC: string;
    activeHandler: (id: string) => void;
     activePlanet: string;
  setActivePlanet: Dispatch<SetStateAction<string>>;
      isLandscape: boolean;
         isMobile: boolean;
};

export const ExploreContext = createContext<ContextType>({
         activeFC: '',
    activeHandler: () => {},
     activePlanet: '',
  setActivePlanet: () => {},
      isLandscape: false,
         isMobile: false,
});

// redux causes unexpected behaviour if you switch active components mid animation on other routes, as well as requiring manual cleaning
// context is used instead as it is only required on explore route and cleans itself on route switch
export default function ExploreContextProvider({ children }: { children: React.ReactNode }) {
  const [   activeFC,    setActiveFC]   = useState('all');
  const [isAnimating, setIsAnimating]   = useState(false);
  const [activePlanet, setActivePlanet] = useState('');
  const isLandscape = useDeviceOrientation();
  const isMobile    = mediaQuery();

  function activeHandler(id: string) {
    if (!isAnimating && id !== activeFC) {
      setIsAnimating(true);
      setActiveFC(id);
      setActivePlanet('');
      setTimeout(() => setIsAnimating(false), 1200);
    }
  }

  const context: ContextType = {
    activeFC,
    activeHandler,
    activePlanet,
    setActivePlanet,
    isLandscape,
    isMobile,
  };

  return <ExploreContext.Provider value={context}>{children}</ExploreContext.Provider>;
}
