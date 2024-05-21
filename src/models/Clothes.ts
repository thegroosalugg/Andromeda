export default class Clothes {
     id: string;
  image: string;
   name: string;
  brand: string;
   desc: string;
   type: string;
  price: string;

  constructor(image: string, name: string, brand: string, desc: string, type: string, price: string) {
    this.id    = 'CL' + Math.floor(Math.random() * 100000);
    this.image = image
    this.name  = name
    this.brand = brand;
    this.desc  = desc;
    this.type  = type;
    this.price = price;
  }

  toObject?() {
    return { ...this };
  }
}
