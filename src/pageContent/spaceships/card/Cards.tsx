import rocket0 from '@/assets/rockets/rocket0.jpg';
import rocket1 from '@/assets/rockets/rocket1.jpg';
import rocket2 from '@/assets/rockets/rocket2.jpg';
import rocket3 from '@/assets/rockets/rocket3.jpg';
import rocket4 from '@/assets/rockets/rocket4.jpg';
import rocket5 from '@/assets/rockets/rocket5.jpg';
import rocket6 from '@/assets/rockets/rocket6.jpg';
import rocket7 from '@/assets/rockets/rocket7.jpg';
import rocket8 from '@/assets/rockets/rocket8.jpg';
import rocket9 from '@/assets/rockets/rocket9.jpg';
import { CONTENT } from '../text';
import { motion } from 'framer-motion';
import Card from './Card';
import css from './Cards.module.css';

const rockets = [rocket0, rocket1, rocket2, rocket3, rocket4, rocket5, rocket6, rocket7, rocket8, rocket9];
const images = [...rockets].sort(() => Math.random() - 0.5).slice(0, 4); // select 4 random images

export default function Cards() {
  const CardPair = ({images, text}: { images: string[], text: string[] }) => (
    <motion.div
      className={css.pair}
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.3 }}
      viewport={{ once: true }}
    >
      <Card image={images[0]} text={text[0]} />
      <Card image={images[1]} text={text[1]} reverse />
    </motion.div>
  );

  return (
    <motion.div
      className={css.cards}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CardPair images={[images[0], images[1]]} text={CONTENT[1]} />
      <CardPair images={[images[2], images[3]]} text={CONTENT[2]} />
    </motion.div>
  );
}
