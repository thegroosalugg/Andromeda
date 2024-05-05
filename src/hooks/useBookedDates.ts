import Booking from '@/models/Booking';
import useSearch from './useSearch';

function dateRange(from: string, till: string) {
  const dates = [];
  const startDate = new Date(from);
  const endDate = new Date(till);

  while (startDate <= endDate) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
}

const useBookedDates = () => {
  const {
    foundId: shipId,
    stateSlice: { users },
  } = useSearch({ search: { id: 'shipId', withParams: true }, reducer: 'users' });

  const bookedDates: Date[] = [];
  users.forEach((user) => {
    user.bookings.forEach((booking: Booking) => {
      if (booking.shipId === shipId) {
        const dates = dateRange(booking.from, booking.till);
        bookedDates.push(...dates);
      }
    });
  });

  return bookedDates;
};

export default useBookedDates;
