export default class SpaceShip {
      id: string;
   model: string;
   maker: string;
   image: string;
  slogan: string;
    desc: string;
    fuel: string;
   speed: number;
    year: number;
   price: number;
  rating: number;
  performance: {
         speed: number;
      handling: number;
    efficiency: number;
         range: number;
  };

  constructor(
     model: string,
     maker: string,
     image: string,
    slogan: string,
      desc: string,
      fuel: string,
     speed: number,
      year: number,
     price: number,
    rating: number,
    performance: {
           speed: number;
        handling: number;
      efficiency: number;
           range: number;
    }
  ) {
    this.id = 'SP' + Math.floor(Math.random() * 100000);
    this.model       = model;
    this.maker       = maker;
    this.image       = image;
    this.slogan      = slogan;
    this.desc        = desc;
    this.fuel        = fuel;
    this.speed       = speed;
    this.year        = year;
    this.price       = price;
    this.rating      = rating;
    this.performance = performance;
  }
}
