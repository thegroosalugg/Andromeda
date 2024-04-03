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

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateSpaceShip = (image: string) => {
  const model = faker.animal.cat() + ' ' + faker.vehicle.model();
  const maker = faker.company.companyName() + ' ' + faker.company.companySuffix();
  const desc  = faker.company.catchPhrase();
  const info  = faker.commerce.productDescription()
  const fuel  = faker.vehicle.fuel() + ' ' + faker.hacker.abbreviation();
  const speed = rand(1000, 3000);
  const year  = rand(2200, 2300);
  const price = rand(4000, 11000);
  return new SpaceShip(model, maker, image, desc, info, fuel, speed, year, price );
};

export const spaceships = images.map(image => generateSpaceShip(image));
