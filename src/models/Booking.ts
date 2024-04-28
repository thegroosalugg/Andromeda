export default class Booking {
  id: string | undefined;
  from: string;
  till:  string;
  destination: string;

  constructor(id: string | undefined, from: string, till: string, destination: string) {
    this.id = id;
    this.from = from;
    this.till = till;
    this.destination = destination;
  }
}
