export default class SpaceShip {
  id:    string;
  name:  string;
  image: string;
  desc:  string;
  price: number;

  constructor(name: string, image: string, desc: string, price: number) {
    this.id    = 'SP' + Math.floor(Math.random() * 100000);
    this.name  = name;
    this.image = image;
    this.desc  = desc;
    this.price = price;
  }
}
