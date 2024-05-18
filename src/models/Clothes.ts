export default class Clothes {
     id: string;
  image: string;
   name: string;
  maker: string;
   desc: string;
   type: string;
  price: number;

  constructor(image: string, name: string, maker: string, desc: string, type: string, price: number) {
    this.id    = 'CL' + Math.floor(Math.random() * 100000);
    this.image = image
    this.name  = name
    this.maker = maker;
    this.desc  = desc;
    this.type  = type;
    this.price = price;
  }

  toObject?() {
    return { ...this };
  }
}
