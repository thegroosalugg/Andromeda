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
    slugId: shipId,
    stateSlice: { users },
  } = useSearch({ slugId: 'shipId', reducer: 'users' });

  const bookedDates: Date[] = [];
  users.forEach((user) => {
    user.bookings.forEach((booking: Booking) => {
      if (booking.id === shipId) {
        const dates = dateRange(booking.from, booking.till);
        bookedDates.push(...dates);
      }
    });
  });

  return bookedDates;
};

export default useBookedDates;
