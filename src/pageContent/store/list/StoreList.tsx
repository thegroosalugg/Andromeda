import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import List from '@/components/list/List';
import css from './StoreList.module.css';
import StoreItem from './StoreItem';
import { useState } from 'react';

export default function StoreList() {
  const { clothes } = useSelector((state: RootState) => state.items);
  const [activeId, setActiveId] = useState<string | undefined>();

  return (
    <List className={css.grid} items={clothes} keyFn={({ id }) => id}>
      {(item) => (
        <StoreItem item={item} clickHandler={() => setActiveId(item.id)} activeId={activeId} />
      )}
    </List>
  );
}
