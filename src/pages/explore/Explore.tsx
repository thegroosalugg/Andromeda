import Universe from '@/pageContent/explore/Universe';
import ExploreContextProvider from './ExploreContext';

export default function ExplorePage() {
  return (
    <ExploreContextProvider>
      <Universe />;
    </ExploreContextProvider>
  );
}
