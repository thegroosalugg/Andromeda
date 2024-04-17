import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../store/types';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';

export default function Footer() {
  const { ships } = useSelector((state: RootState) => state.ships);
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith('/ships') && (
        <SpaceShipsList className='ship-rows' spaceships={ships} />
      )}
    </>
  );
}
