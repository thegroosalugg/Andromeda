import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '@/store/formSlice';
import useSearch from '@/hooks/useSearch';
import { RootState } from '@/store/types';

const Price = () => {
  const dispatch = useDispatch();
  const { from, till } = useSelector((state: RootState) => state.form.data);
  const { item: spaceship } = useSearch({
    search: { id: 'shipId', withParams: true },
    reducer: 'ships',
    sliceKey: 'ships',
  });

  const fromDate = new Date(from!);
  const tillDate = new Date(till!);

  let message = 'Daily Rate: $' + spaceship!.price;
  let price = 0;

  if (fromDate <= tillDate) {
    const diffInMs = tillDate.getTime() - fromDate.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;
    price = diffInDays * spaceship!.price;
    message = 'Total Price: $' + price;
  }

  useEffect(() => {
    dispatch(updateData({ id: 'price', value: price.toString() }));
  }, [price, dispatch]);

  return (
    <AnimatePresence mode='wait'>
      <motion.p
        key={message}
        style={{ color: 'white', margin: '0.5rem auto' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        {message}
      </motion.p>
    </AnimatePresence>
  );
};

export default Price;
