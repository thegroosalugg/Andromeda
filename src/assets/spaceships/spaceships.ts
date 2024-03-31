import SpaceShip from '../../models/SpaceShip';
import ship1 from './spaceship_01.jpg';
import ship2 from './spaceship_02.jpg';
import ship3 from './spaceship_03.jpg';
import ship4 from './spaceship_04.jpg';
import ship5 from './spaceship_05.jpg';
import ship6 from './spaceship_06.jpg';
import ship7 from './spaceship_07.jpg';
import ship8 from './spaceship_08.jpg';
import ship9 from './spaceship_09.jpg';
import ship10 from './spaceship_10.jpg';
import ship11 from './spaceship_11.jpg';
import ship12 from './spaceship_12.jpg';

import faker from 'faker';

const images = [ship1, ship2, ship3, ship4, ship5, ship6, ship7, ship8, ship9, ship10, ship11, ship12]

const generateSpaceShip = (image: string) => {
  const name = faker.animal.cat() + ' ' + faker.vehicle.model();
  const desc = faker.company.catchPhrase();
  const price = +(1000 + Math.random() * 10000).toFixed(2);
  return new SpaceShip(name, image, desc, price);
};

export const spaceships = images.map(image => generateSpaceShip(image));
