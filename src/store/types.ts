import SpaceShip from '@/models/SpaceShip';
import User from '@/models/User';
import { FormData } from '@/models/FormData'

interface ShipsState {
  ships: SpaceShip[];
}

interface ModalState {
  isOpen: boolean;
  item: { [key: string]: unknown };
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
  ships: ShipsState;
  modal: ModalState;
  users: UserState;
  form: FormState;
}
