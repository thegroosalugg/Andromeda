import coat01 from '@/assets/catalogue/coat01.jpg';
import coat02 from '@/assets/catalogue/coat02.jpg';
import coat03 from '@/assets/catalogue/coat03.jpg';
import coat04 from '@/assets/catalogue/coat04.jpg';
import coat05 from '@/assets/catalogue/coat05.jpg';
import coat06 from '@/assets/catalogue/coat06.jpg';
import coat07 from '@/assets/catalogue/coat07.jpg';
import coat08 from '@/assets/catalogue/coat08.jpg';
import jacket01 from '@/assets/catalogue/jacket01.jpg';
import jacket02 from '@/assets/catalogue/jacket02.jpg';
import jacket03 from '@/assets/catalogue/jacket03.jpg';
import jacket04 from '@/assets/catalogue/jacket04.jpg';
import jacket05 from '@/assets/catalogue/jacket05.jpg';
import jacket06 from '@/assets/catalogue/jacket06.jpg';
import jacket07 from '@/assets/catalogue/jacket07.jpg';
import jacket08 from '@/assets/catalogue/jacket08.jpg';
import jacket09 from '@/assets/catalogue/jacket09.jpg';
import jacket10 from '@/assets/catalogue/jacket10.jpg';
import jacket11 from '@/assets/catalogue/jacket11.jpg';
import jacket12 from '@/assets/catalogue/jacket12.jpg';
import tracksuit01 from '@/assets/catalogue/tracksuit01.jpg';
import tracksuit02 from '@/assets/catalogue/tracksuit02.jpg';
import tracksuit03 from '@/assets/catalogue/tracksuit03.jpg';
import tracksuit04 from '@/assets/catalogue/tracksuit04.jpg';
import tracksuit05 from '@/assets/catalogue/tracksuit05.jpg';
import tracksuit06 from '@/assets/catalogue/tracksuit06.jpg';
import tracksuit07 from '@/assets/catalogue/tracksuit07.jpg';
import tracksuit08 from '@/assets/catalogue/tracksuit08.jpg';
import varsity01 from '@/assets/catalogue/varsity01.jpg';
import varsity02 from '@/assets/catalogue/varsity02.jpg';
import varsity03 from '@/assets/catalogue/varsity03.jpg';
import varsity04 from '@/assets/catalogue/varsity04.jpg';
import Clothes from '@/models/Clothes';
import rand from '../util/rand';
import { shuffle } from '@/util/shuffle';

// prettier-ignore
const images = [
  coat01, coat02, coat03, coat04, coat05, coat06, coat07, coat08, jacket01, jacket02, jacket03, jacket04, jacket05,
  jacket06, jacket07, jacket08, jacket09, jacket10, jacket11, jacket12, tracksuit01, tracksuit02, tracksuit03,
  tracksuit04, tracksuit05, tracksuit06, tracksuit07, tracksuit08, varsity01, varsity02, varsity03, varsity04
 ];

 const brands = ['BlackBerry', 'SUAVE', 'Galaxy', 'React', 'Infinity', 'TypeScript', 'LaVa', '5thElement', 'CREW', 'Pulse'];
 const descriptors = [
   'classic', 'old school', 'essentials', 'prestige', 'space', 'moon', 'earth', 'mars', 'future', 'time', 'anthem', 'middlewear',
   'original', 'gravity', 'premium', 'vintage', 'elite', 'odyssey', 'trailblazer', 'mystic', 'quest', 'explorer', 'vanguard',
  ];

 function generateItem(image: string) {
  const brand = brands[rand(0, brands.length - 1)]
  const price = rand(50, 200) + '.99'
  const type = image.slice(22, -6);
  const name = descriptors[rand(0, descriptors.length - 1)] + ' ' + type
  return new Clothes(image, name, brand, 'desc', type, price)
 }

 export const catalogue = shuffle(images.map((image) => generateItem(image)));
