import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface SearchParams<T extends keyof RootState> {
  search: { id: string; withParams: boolean };
  reducer: T;
  sliceKey?: keyof RootState[T];
}

export default function useSearch<T extends keyof RootState>({
  search,
  reducer,
  sliceKey,
}: SearchParams<T>): {
  item: object | null;
  foundId: string | undefined;
  stateSlice: RootState[T];
} {
  const params = useParams();
  const stateSlice = useSelector((state: RootState) => state[reducer]);
  const foundId = search.withParams ? params[search.id] : search.id;
  let item = null;

  if (sliceKey) {
    item = (stateSlice[sliceKey] as []).find((item: { id: string }) => item.id === foundId) || null;
  }

  return { item, foundId, stateSlice };
}
