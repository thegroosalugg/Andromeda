import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import useValidate from '@/hooks/useValidate';
import List from '@/components/list/List';
import Input from '@/components/form/Input';
import BookedItem from '../bookings/BookedItem';
import Modal from '@/components/modal/Modal';
import EditBooking from '../bookings/EditBooking';
import EmptyList from './EmptyList';
import OrderDetails from '../orders/OrderDetails';
import UserActions from './UserActions';
import User from '@/models/User';
import { FormData } from '@/models/FormData';
import css from './UserPortal.module.css';
import styles from './UserActions.module.css'; // the one button here has same styles as UserActions which have their own module

export default function UserPortal(user: User) {
  const { id, bookings, orders, ...userDetails } = user;
  const { item } = useSelector((state: RootState) => state.modal);
  const validate = useValidate({ update: { userId: id } });

  return (
    <motion.section
      className={css['portal']}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'easeInOut' }}
    >
      <Modal>
        <EditBooking id={id} {...item} />
      </Modal>

      <section className={css['top-row']}>
        <div className={css.user}>
          <h2>Details</h2>
          <List
            className={css['user-inputs']}
            items={Object.entries(userDetails)}
            keyFn={([key]) => key}
          >
            {([key, value]) => (
              <p>
                <span>{key}</span>
                <Input id={key as keyof FormData} savedData={value} />
              </p>
            )}
          </List>
          <button className={styles['button']} onClick={validate}>
            SAVE
          </button>
        </div>

        {bookings.length === 0 && <EmptyList type='bookings' />}

        <List className={css['bookings']} items={bookings} keyFn={({ id }) => id}>
          {(booking) => <BookedItem {...booking} />}
        </List>
      </section>

      {orders.length === 0 && <EmptyList type='orders' />}

      <List className={css['orders']} items={orders} keyFn={({ id }) => id}>
        {(order) => <OrderDetails {...order} />}
      </List>

      <UserActions id={id} />
    </motion.section>
  );
}
