import Banner from '@/components/banner/Banner';
import Article from '@/pageContent/spaceships/article/Article';
import Section from '@/components/containers/Section';
import SlideShow from '@/pageContent/spaceships/slideshow/SlideShow';
import SpaceShipsList from '@/pageContent/spaceships/list/SpaceShipsList';
import Cards from '@/pageContent/spaceships/card/Cards';

export default function SpaceShipsPage() {
  return (
    <>
      <Section>
        <Article />
        <SlideShow />
      </Section>
      <Banner>Check Out The Fleet</Banner>
      <SpaceShipsList className='ship-grid' />
      <Banner reverse>Going Somewhere?</Banner>
      <Cards />
    </>
  );
}
