import SpaceShip from '../../models/SpaceShip';
import rand from '../../util/rand';
import ship01 from './spaceship_01.jpg';
import ship02 from './spaceship_02.jpg';
import ship03 from './spaceship_03.jpg';
import ship04 from './spaceship_04.jpg';
import ship05 from './spaceship_05.jpg';
import ship06 from './spaceship_06.jpg';
import ship07 from './spaceship_07.jpg';
import ship08 from './spaceship_08.jpg';
import ship09 from './spaceship_09.jpg';
import ship10 from './spaceship_10.jpg';
import ship11 from './spaceship_11.jpg';
import ship12 from './spaceship_12.jpg';
import ship13 from './spaceship_13.jpg';
import ship14 from './spaceship_14.jpg';
import ship15 from './spaceship_15.jpg';
import ship16 from './spaceship_16.jpg';
import ship17 from './spaceship_17.jpg';
import ship18 from './spaceship_18.jpg';
import ship19 from './spaceship_19.jpg';
import ship20 from './spaceship_20.jpg';
import ship21 from './spaceship_21.jpg';
import ship22 from './spaceship_22.jpg';
import ship23 from './spaceship_23.jpg';
import ship24 from './spaceship_24.jpg';
import ship25 from './spaceship_25.jpg';
import ship26 from './spaceship_26.jpg';

import faker from 'faker';

// prettier-ignore
const images = [
  ship01, ship02, ship03, ship04, ship05, ship06, ship07, ship08, ship09, ship10,
  ship11, ship12, ship13, ship14, ship15, ship16, ship17, ship18, ship19, ship20,
  ship21, ship22, ship23, ship24, ship25, ship26
];

const generateSpaceShip = (image: string) => {
  const model  = faker.animal.cat() + ' ' + faker.vehicle.model();
  const maker  = faker.company.companyName() + ' ' + faker.company.companySuffix();
  const desc   = faker.company.catchPhrase();
  const info   = faker.commerce.productDescription();
  const fuel   = faker.vehicle.fuel() + ' ' + faker.hacker.abbreviation();
  const speed  = rand(1000, 3000);
  const year   = rand(2200, 2300);
  const price  = rand(4000, 11000);
  const rating = rand(3, 5);
  const performance = {
    speed:      rand(6, 10),
    handling:   rand(6, 10),
    efficiency: rand(6, 10),
    range:      rand(6, 10),
  };
  return new SpaceShip(
    model,
    maker,
    image,
    desc,
    info,
    fuel,
    speed,
    year,
    price,
    rating,
    performance
  );
};

export const spaceships = images.map((image) => generateSpaceShip(image));
