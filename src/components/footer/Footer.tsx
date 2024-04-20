import { useLocation } from 'react-router-dom';
import LandingFooter from '@/pageContent/landingPage/footer/LandingFooter';
import SpaceShipsList from '@/pageContent/spaceships/list/SpaceShipsList';

export default function Footer() {
  const { pathname } = useLocation();

  let footer;

  if (pathname.startsWith('/ships')) {
    footer = <SpaceShipsList className='ship-rows' />;
  } else if (pathname === '/') {
    footer = <LandingFooter />;
  }

  return footer;
}
