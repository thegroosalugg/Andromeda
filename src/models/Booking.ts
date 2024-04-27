export default class Booking {
  id: string | undefined;
  from: Date | string;
  till: Date | string;
  destination: string;

  constructor(id: string | undefined, from: Date | string, till: Date | string, destination: string) {
    this.id = id;
    this.from = from;
    this.till = till;
    this.destination = destination;
  }
}
