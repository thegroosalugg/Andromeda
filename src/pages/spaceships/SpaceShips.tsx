import { spaceships } from '../../assets/spaceships/spaceships';
import Banner from '../../components/banner/Banner';
import ShipCity from '../../components/spaceships/city/ShipCity';
import Article from '../../components/containers/Article';
import Section from '../../components/containers/Section';
import SlideShow from '../../components/slideshow/SlideShow';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';
import UFO from '../../components/spaceships/UFO';

export default function SpaceShipsPage() {
  return (
    <>
      <Section>
        <Article />
        <SlideShow array={spaceships} />
      </Section>
      <Banner>Check Out The Fleet</Banner>
      <SpaceShipsList className='ship-grid' spaceships={spaceships} />
      <Banner reverse>Going Somewhere?</Banner>
      <ShipCity />
      <UFO />
    </>
  );
}
