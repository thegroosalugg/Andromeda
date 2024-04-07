import { useScroll, useTransform } from 'framer-motion';
import { spaceships } from '../../assets/spaceships/spaceships';
import Banner from '../../components/Banner';
import css from '../../components/Banner.module.css' // remove
import Article from '../../components/containers/Article';
import Section from '../../components/containers/Section';
import SlideShow from '../../components/SlideShow';
import SpaceShipsList from '../../components/spaceships/list/SpaceShipsList';
import MotionDiv from '../../components/UI/MotionDiv'; // remove

export default function SpaceShipsPage() {
  const { scrollY } = useScroll();
  const xBanner = useTransform(scrollY, [0, 300, 350, 450, 500], ['-100vw', '-75vw', '-50vw', '-25vw', 0]);
  const yText = useTransform(scrollY, [0, 500, 550, 600],['-100%', '-50%', '-25%', 0]);
  const yOpacity = useTransform(scrollY, [0, 500, 550, 600], [0,  0.3, 0.7, 1]);

  return (
    <>
      <Section>
        <Article />
        <SlideShow array={spaceships} />
      </Section>

      <MotionDiv
      className={css.banner}
      style={{ x: xBanner  }}
    >
      <MotionDiv
        element='span'
        style={{ opacity: yOpacity, translateY: yText }}
        >
        CHECK OUT THE FLEET
      </MotionDiv>
    </MotionDiv>
      {/* <Banner /> */}
      <SpaceShipsList className='ship-grid' spaceships={spaceships} />
    </>
  );
}
