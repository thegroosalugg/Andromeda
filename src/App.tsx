import RootLayout from './pages/root';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/Store';
import SpaceShipsPage from './pages/spaceships/SpaceShips';
import ShipIDPage from './pages/spaceships/ShipID';
import ExplorePage from './pages/explore/Explore';
import UserPage from './pages/User';
// import PlayGround from './pages/playground/PlayGround';
import ErrorPage from './components/error/Error';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; // import brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // import regular icons
library.add(fab, fas, far);

import { useRoutes } from 'react-router-dom';

export default function App() {
  const element = useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: 'store', element: <StorePage /> },
    { path: 'ships', element: <SpaceShipsPage /> },
    { path: 'ships/:shipId', element: <ShipIDPage /> },
    { path: 'explore', element: <ExplorePage /> },
    { path: 'user', element: <UserPage /> },
    // { path: '/playground', element: <PlayGround /> },
    { path: '*', element: <ErrorPage /> },
  ]);

  if (!element) return null;

  return <RootLayout>{element}</RootLayout>;
}
