import { Model } from '@/models/Model';
import SpaceShip from '@/models/SpaceShip';
import User from '@/models/User';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface StateSlices {
  ships: SpaceShip[];
  users: User[];
}

interface SearchParams<T extends keyof StateSlices> {
  search: { id: string; withParams: boolean };
  reducer: T;
  sliceKey?: T;
}

export default function useSearch<T extends keyof StateSlices>({
  search,
  reducer,
  sliceKey,
}: SearchParams<T>): {
  item: StateSlices[T][number] | null;
  foundId: string | undefined;
  stateSlice: RootState[T];
} {
  const params = useParams();
  const stateSlice = useSelector((state: RootState) => state[reducer]);
  const foundId = search.withParams ? params[search.id] : search.id
  let item = null;
  if (sliceKey) {
    item =
      (stateSlice as StateSlices)[sliceKey].find((item: Model) => item.id === foundId) ||
      null;
  }

  return { item, foundId, stateSlice };
}
