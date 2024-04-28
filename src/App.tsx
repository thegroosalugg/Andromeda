import RootLayout from './pages/root';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/Store';
import SpaceShipsPage from './pages/spaceships/SpaceShips';
import ShipIDPage from './pages/spaceships/ShipID';
import ExplorePage from './pages/Explore';
import ErrorPage from './components/error/Error';

import { useRoutes } from 'react-router-dom';

export default function App() {
  const element = useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: 'store', element: <StorePage /> },
    { path: 'ships', element: <SpaceShipsPage /> },
    { path: 'ships/:shipId', element: <ShipIDPage /> },
    { path: 'explore', element: <ExplorePage /> },
    { path: '*', element: <ErrorPage /> },
  ]);

  if (!element) return null;

  return <RootLayout>{element}</RootLayout>;
}
