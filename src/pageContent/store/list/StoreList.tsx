import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import List from '@/components/list/List';
import css from './StoreList.module.css';
import StoreItem from './StoreItem';

export default function StoreList() {
  const { clothes } = useSelector((state: RootState) => state.items);

  return (
    <List className={css.grid} items={clothes} keyFn={({ id }) => id}>
      {(item) => <StoreItem {...item} />}
    </List>
  );
}
