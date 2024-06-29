import Clothes from './Clothes';

export default class Order {
       id: string;
  address: { street: string; city: string; postcode: string; country: string };
    price: string;
     date: string;
    items: Clothes[];

  constructor(
    address: { street: string; city: string; postcode: string; country: string },
      price: string,
      items: Clothes[]
  ) {
    this.id      = 'OR' + Math.floor(Math.random() * 100000);
    this.address = address;
    this.price   = price;
    this.date    = new Date().toISOString();
    this.items   = items;
  }

  toObject?() {
    return { ...this };
  }
}
