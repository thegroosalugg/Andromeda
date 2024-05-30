import Clothes from "./Clothes";

export default class Order {
       id: string;
  address: string;
    price: number;
    items: Clothes[];

  constructor(address: string, price: number, items: Clothes[]) {
    this.id      = 'OR' + Math.floor(Math.random() * 100000);
    this.address = address;
    this.price   = price;
    this.items   = items;
  }
}
