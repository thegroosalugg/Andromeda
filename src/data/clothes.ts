import jacket01 from '@/assets/clothes/jacket01.jpg';
import jacket02 from '@/assets/clothes/jacket02.jpg';
import jacket03 from '@/assets/clothes/jacket03.jpg';
import jacket04 from '@/assets/clothes/jacket04.jpg';
import jacket05 from '@/assets/clothes/jacket05.jpg';
import jacket06 from '@/assets/clothes/jacket06.jpg';
import jacket07 from '@/assets/clothes/jacket07.jpg';
import jacket08 from '@/assets/clothes/jacket08.jpg';
import jacket09 from '@/assets/clothes/jacket09.jpg';
import jacket10 from '@/assets/clothes/jacket10.jpg';
import jacket11 from '@/assets/clothes/jacket11.jpg';
import jacket12 from '@/assets/clothes/jacket12.jpg';
import jacket13 from '@/assets/clothes/jacket13.jpg';
import jacket14 from '@/assets/clothes/jacket14.jpg';
import jacket15 from '@/assets/clothes/jacket15.jpg';
import jacket16 from '@/assets/clothes/jacket16.jpg';
import jacket17 from '@/assets/clothes/jacket17.jpg';
import jacket18 from '@/assets/clothes/jacket18.jpg';
import jacket19 from '@/assets/clothes/jacket19.jpg';
import jacket20 from '@/assets/clothes/jacket20.jpg';
import jacket21 from '@/assets/clothes/jacket21.jpg';
import jacket22 from '@/assets/clothes/jacket22.jpg';
import jacket23 from '@/assets/clothes/jacket23.jpg';
import jacket24 from '@/assets/clothes/jacket24.jpg';
import coat1 from '@/assets/clothes/coat01.jpg';
import coat2 from '@/assets/clothes/coat02.jpg';
import coat3 from '@/assets/clothes/coat03.jpg';
import coat4 from '@/assets/clothes/coat04.jpg';
import coat5 from '@/assets/clothes/coat05.jpg';
import coat6 from '@/assets/clothes/coat06.jpg';
import coat7 from '@/assets/clothes/coat07.jpg';
import coat8 from '@/assets/clothes/coat08.jpg';
import coat9 from '@/assets/clothes/coat09.jpg';
import jumpsuit01 from '@/assets/clothes/jumpsuit01.jpg';
import jumpsuit02 from '@/assets/clothes/jumpsuit02.jpg';
import tracksuit01 from '@/assets/clothes/tracksuit01.jpg';
import tracksuit02 from '@/assets/clothes/tracksuit02.jpg';
import tracksuit03 from '@/assets/clothes/tracksuit03.jpg';
import tracksuit04 from '@/assets/clothes/tracksuit04.jpg';
import tracksuit05 from '@/assets/clothes/tracksuit05.jpg';
import tracksuit06 from '@/assets/clothes/tracksuit06.jpg';
import tracksuit07 from '@/assets/clothes/tracksuit07.jpg';
import tracksuit08 from '@/assets/clothes/tracksuit08.jpg';
import tracksuit09 from '@/assets/clothes/tracksuit09.jpg';
import tracksuit10 from '@/assets/clothes/tracksuit10.jpg';
import tracksuit11 from '@/assets/clothes/tracksuit11.jpg';
import tracksuit12 from '@/assets/clothes/tracksuit12.jpg';
import tracksuit13 from '@/assets/clothes/tracksuit13.jpg';
import tracksuit14 from '@/assets/clothes/tracksuit14.jpg';
import turtleneck01 from '@/assets/clothes/turtleneck01.jpg';
import turtleneck02 from '@/assets/clothes/turtleneck02.jpg';
import varsity01 from '@/assets/clothes/varsity01.jpg';
import varsity02 from '@/assets/clothes/varsity02.jpg';
import varsity03 from '@/assets/clothes/varsity03.jpg';
import varsity04 from '@/assets/clothes/varsity04.jpg';
import varsity05 from '@/assets/clothes/varsity05.jpg';
import varsity06 from '@/assets/clothes/varsity06.jpg';
import varsity07 from '@/assets/clothes/varsity07.jpg';
import Clothes from '@/models/Clothes';

// prettier-ignore
const images = [ jacket01, jacket02, jacket03, jacket04, jacket05, jacket06, jacket07, jacket08, jacket09,
  jacket10, jacket11, jacket12, jacket13, jacket14, jacket15, jacket16, jacket17, jacket18, jacket19,
  jacket20, jacket21, jacket22, jacket23, jacket24, coat1, coat2, coat3, coat4, coat5, coat6, coat7, coat8, coat9,
   jumpsuit01, jumpsuit02, tracksuit01, tracksuit02, tracksuit03, tracksuit04, tracksuit05, tracksuit06, tracksuit07,
   tracksuit08, tracksuit09, tracksuit10, tracksuit11, tracksuit12, tracksuit13, tracksuit14,
   turtleneck01, turtleneck02, varsity01, varsity02, varsity03, varsity04, varsity05, varsity06, varsity07,
 ]

 function generateItem(image: string) {
  return new Clothes(image, 'NAME', 'MAKER', 'DESC', 'TYPE', 10)
 }

 export const catalogue = images.map((image) => generateItem(image))
