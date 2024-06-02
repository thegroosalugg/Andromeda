import Booking from './Booking';
import Order from './Order';

export default class User {
        id: string;
      name: string;
   surname: string;
     email: string;
     phone: string;
  bookings: Booking[];
    orders:   Order[];

  constructor(name: string, surname: string, email: string, phone: string) {
    this.id       = 'UR' + Math.floor(Math.random() * 100000);
    this.name     = name;
    this.surname  = surname;
    this.email    = email;
    this.phone    = phone;
    this.bookings = [];
    this.orders   = [];
  }

  toObject?() {
    return { ...this };
  }
}
