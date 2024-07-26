import { createContext, useState } from 'react';

type ContextType = {
  isActive: string;
  activeHandler: (id: string) => void;
};

export const ExploreContext = createContext<ContextType>({
  isActive: '',
  activeHandler: () => {},
});

// redux causes unexpected behaviour if you switch active components mid animation on other routes, as well as requiring manual cleaning
// context is used instead as it is only required on explore route and cleans itself on route switch
export default function ExploreContextProvider({ children }: { children: React.ReactNode }) {
  const [   isActive,    setIsActive] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  function activeHandler(id: string) {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsActive(id);
      setTimeout(() => setIsAnimating(false), 2000);
    }
  }

  const context: ContextType = {
    isActive,
    activeHandler,
  };

  return <ExploreContext.Provider value={context}>{children}</ExploreContext.Provider>;
}
