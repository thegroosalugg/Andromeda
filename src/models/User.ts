import Booking from './Booking';

export default class User {
  name: string;
  surname: string;
  email: string;
  phone: string;
  bookings: Booking[];

  constructor(name: string, surname: string, email: string, phone: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.bookings = [];
  }

  addBooking(booking: Booking) {
    this.bookings.push(booking);
  }
}
