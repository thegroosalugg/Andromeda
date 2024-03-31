import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/root';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/Store';
import SpaceShipsPage from './pages/SpaceShips';
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
      { path: 'explore', element: <ExplorePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
