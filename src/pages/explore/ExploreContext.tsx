import { createContext, useState } from 'react';

type ContextType = {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
};

export const ExploreContext = createContext<ContextType>({
  isActive: '',
  setIsActive: () => {},
});

// redux causes unexpected behaviour if you switch active components mid animation on other routes, as well as requiring manual cleaning
// context is used instead as it is only required on explore route and cleans itself on route switch
export default function ExploreContextProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState('all');

  const context: ContextType = {
    isActive,
    setIsActive,
  };

  return <ExploreContext.Provider value={context}>{children}</ExploreContext.Provider>;
}
