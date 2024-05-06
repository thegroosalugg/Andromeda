export default class Booking {
  id: number;
  shipId: string;
  from: string;
  till:  string;
  pickup: string;
  dropoff: string;

  constructor(shipId: string, from: string, till: string, pickup: string, dropoff: string) {
    this.id = Math.floor(Math.random() * 100000)
    this.shipId = shipId;
    this.from = from;
    this.till = till;
    this.pickup = pickup;
    this.dropoff = dropoff;
  }

  toObject?() {
    return { ...this };
  }
}
