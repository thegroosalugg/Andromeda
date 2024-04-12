import { spaceships } from '../../assets/spaceships/spaceships';
import Banner from '../../components/banner/Banner';
import ShipBanner from '../../components/banner/ShipBanner';
import Article from '../../components/containers/Article';
import Section from '../../components/containers/Section';
import SlideShow from '../../components/slideshow/SlideShow';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <Section>
        <Article />
        <SlideShow array={spaceships} />
      </Section>
      <Banner />
      <SpaceShipsList className='ship-grid' spaceships={spaceships} />
      <ShipBanner />
      <ShipBanner reverse />
      <ShipBanner />
      <ShipBanner reverse />
    </>
  );
}
