import { useSelector } from 'react-redux';
import useSearch from '@/hooks/useSearch';
import { RootState } from '@/store/types';
import { AnimatePresence, motion } from 'framer-motion';

const Price = () => {
  const { from, till } = useSelector((state: RootState) => state.form.data);
  const { item: spaceship } = useSearch({
    search: { id: 'shipId', withParams: true },
    reducer: 'ships',
    sliceKey: 'ships',
  });

  const fromDate = new Date(from!);
  const tillDate = new Date(till!);

  let totalPrice = 'Daily Rate: $' + spaceship!.price;

  if (fromDate <= tillDate) {
    const diffInMs = tillDate.getTime() - fromDate.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;
    const price = diffInDays * spaceship!.price;
    totalPrice = 'Total Price: $' + price;
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.p
        key={totalPrice}
        style={{ color: 'white', margin: '0.5rem auto' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        {totalPrice}
      </motion.p>
    </AnimatePresence>
  );
};

export default Price;
