import ship01 from '../assets/spaceships/spaceship_01.jpg';
import ship02 from '../assets/spaceships/spaceship_02.jpg';
import ship03 from '../assets/spaceships/spaceship_03.jpg';
import ship04 from '../assets/spaceships/spaceship_04.jpg';
import ship05 from '../assets/spaceships/spaceship_05.jpg';
import ship06 from '../assets/spaceships/spaceship_06.jpg';
import ship07 from '../assets/spaceships/spaceship_07.jpg';
import ship08 from '../assets/spaceships/spaceship_08.jpg';
import ship09 from '../assets/spaceships/spaceship_09.jpg';
import ship10 from '../assets/spaceships/spaceship_10.jpg';
import ship11 from '../assets/spaceships/spaceship_11.jpg';
import ship12 from '../assets/spaceships/spaceship_12.jpg';
import ship13 from '../assets/spaceships/spaceship_13.jpg';
import ship14 from '../assets/spaceships/spaceship_14.jpg';
import ship15 from '../assets/spaceships/spaceship_15.jpg';
import ship16 from '../assets/spaceships/spaceship_16.jpg';
import ship17 from '../assets/spaceships/spaceship_17.jpg';
import ship18 from '../assets/spaceships/spaceship_18.jpg';
import ship19 from '../assets/spaceships/spaceship_19.jpg';
import ship20 from '../assets/spaceships/spaceship_20.jpg';
import ship21 from '../assets/spaceships/spaceship_21.jpg';
import ship22 from '../assets/spaceships/spaceship_22.jpg';
import ship23 from '../assets/spaceships/spaceship_23.jpg';
import ship24 from '../assets/spaceships/spaceship_24.jpg';
import ship25 from '../assets/spaceships/spaceship_25.jpg';
import ship26 from '../assets/spaceships/spaceship_26.jpg';

import SpaceShip from '../models/SpaceShip';
import faker from 'faker';
import rand from '../util/rand';

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
