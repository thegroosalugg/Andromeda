import useSearch from '@/hooks/useSearch';
import Booking from '@/models/Booking';

const BookedItem = (booking: Booking) => {
  const { item: ship } = useSearch({
    search: { id: booking.shipId, withParams: false },
    reducer: 'ships',
    sliceKey: 'ships',
  });

  return <img src={ship!.image} alt='ship' />;
};

export default BookedItem;
