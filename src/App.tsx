import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/root';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/Store';
import SpaceShipsPage from './pages/spaceships/SpaceShips';
import ShipIDPage from './pages/spaceships/ShipID';
import ExplorePage from './pages/Explore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />, // TBA
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'store', element: <StorePage /> },
      { path: 'ships', element: <SpaceShipsPage /> },
      { path: 'ships/:id', element: <ShipIDPage /> },
      { path: 'explore', element: <ExplorePage /> },
    ],
  },
]); 

export default function App() {
  return <RouterProvider router={router} />;
}
