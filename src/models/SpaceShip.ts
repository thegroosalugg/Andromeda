export default class SpaceShip {
  id:    string;
  name:  string;
  make:  string;
  image: string;
  desc:  string;
  price: number;
  year:  number;
  speed: number;
  fuel:  string;
  specs: string;

  constructor(
    name:  string,
    make:  string,
    image: string,
    desc:  string,
    price: number,
    year:  number,
    speed: number,
    fuel:  string,
    specs: string
  ) {
    this.id    = 'SP' + Math.floor(Math.random() * 100000);
    this.name  = name;
    this.make  = make;
    this.image = image;
    this.desc  = desc;
    this.price = price;
    this.year  = year;
    this.speed = speed;
    this.fuel  = fuel;
    this.specs = specs;
  }
}
