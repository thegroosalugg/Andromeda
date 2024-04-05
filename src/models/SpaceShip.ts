export default class SpaceShip {
  id:     string;
  model:  string;
  maker:  string;
  image:  string;
  desc:   string;
  info:   string;
  fuel:   string;
  speed:  number;
  year:   number;
  price:  number;
  rating: number;

  constructor(
    model:  string,
    maker:  string,
    image:  string,
    desc:   string,
    info:   string,
    fuel:   string,
    speed:  number,
    year:   number,
    price:  number,
    rating: number,
  ) {
    this.id     = 'SP' + Math.floor(Math.random() * 100000);
    this.model  = model;
    this.maker  = maker;
    this.image  = image;
    this.desc   = desc;
    this.info   = info;
    this.fuel   = fuel;
    this.speed  = speed;
    this.year   = year;
    this.price  = price;
    this.rating = rating;
  }
}
