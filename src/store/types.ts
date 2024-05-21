import SpaceShip from '@/models/SpaceShip';
import User from '@/models/User';
import { FormData } from '@/models/FormData'
import Clothes from '@/models/Clothes';

interface ItemsState {
  ships: SpaceShip[];
  clothes: Clothes[];
}

interface ModalState {
  isOpen: boolean;
  item: { [key: string]: unknown } | null;
}

interface UserState {
  users: User[];
  user: User | null;
}

interface FormState {
  data: FormData;
  errors: FormData;
}

export interface RootState {
  items: ItemsState;
  modal: ModalState;
  users: UserState;
  form: FormState;
}
