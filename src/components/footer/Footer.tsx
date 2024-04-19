import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../store/types';
import LandingFooter from '../../pageContent/landingPage/footer/LandingFooter';
import SpaceShipsList from '../../pageContent/spaceships/list/SpaceShipsList';

export default function Footer() {
  const { ships } = useSelector((state: RootState) => state.ships);
  const { pathname } = useLocation();

  let footer;

  if (pathname.startsWith('/ships')) {
    footer = <SpaceShipsList className='ship-rows' spaceships={ships} />;
  } else if (pathname === '/') {
    footer = <LandingFooter />;
  }

  return footer;
}
