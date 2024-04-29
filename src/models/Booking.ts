export default class Booking {
  id: number;
  shipId: string;
  from: string;
  till:  string;
  destination: string;

  constructor(shipId: string, from: string, till: string, destination: string) {
    this.id = Math.floor(Math.random() * 100000)
    this.shipId = shipId;
    this.from = from;
    this.till = till;
    this.destination = destination;
  }

  toObject() {
    return { ...this };
  }
}
