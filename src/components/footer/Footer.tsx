import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../store/types';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';
import LandingFooter from './LandingFooter';

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
