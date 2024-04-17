import Banner from '../../components/banner/Banner';
import Article from '../../components/containers/Article';
import Section from '../../components/containers/Section';
import SlideShow from '../../components/slideshow/SlideShow';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';

export default function SpaceShipsPage() {
  const { ships } = useSelector((state: RootState) => state.ships)

  return (
    <>
      <Section>
        <Article />
        <SlideShow array={ships} />
      </Section>
      <Banner>Check Out The Fleet</Banner>
      <SpaceShipsList className='ship-grid' spaceships={ships} />
      <Banner reverse>Going Somewhere?</Banner>
      {/* Ships moved to landing. Pad with other content */}
    </>
  );
}
