export default class Booking {
  id: string;
  from: Date;
  till: Date;
  destination: string;

  constructor(id: string, from: Date, till: Date, destination: string) {
    this.id = id;
    this.from = from;
    this.till = till;
    this.destination = destination;
  }
}
