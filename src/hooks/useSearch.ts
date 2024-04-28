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

export default function useSearch<T extends keyof StateSlices>(
  id: string,
  reducer: T,
  sliceKey: T
): {
  item: StateSlices[T][number] | null;
  id: string | undefined;
  stateSlice: RootState[T];
} {
  const params = useParams();
  const stateSlice = useSelector((state: RootState) => state[reducer]);
  const item =
    (stateSlice as StateSlices)[sliceKey].find((item: Model) => item.id === params[id]) || null;

  return { item, id: params[id], stateSlice };
}
