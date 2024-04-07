import { spaceships } from '../../assets/spaceships/spaceships';
import Article from '../../components/containers/Article';
import Section from '../../components/containers/Section';
import SlideShow from '../../components/SlideShow';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';

export default function SpaceShipsPage() {
  return (
    <>
      <Section>
        <Article />
        <SlideShow array={spaceships} />
      </Section>
      <SpaceShipsList className='ship-grid' spaceships={spaceships} />
    </>
  );
}
